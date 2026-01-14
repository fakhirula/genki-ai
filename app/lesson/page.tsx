'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Progress,
  VStack,
  HStack,
  Badge,
  useToast,
  Spinner,
  SimpleGrid,
} from '@chakra-ui/react';
import { getCharactersByLevel, Character } from '@/data/characters';
import { useAppStore } from '@/store/appStore';
import { generateAIQuiz, generateAIHint, AIGeneratedQuestion } from '@/utils/aiQuizGenerator';
import { INDONESIAN } from '@/constants';

interface QuizQuestion {
  id: string;
  character: string;
  romanization: string;
  meaning: string;
  options: {
    id: string;
    text: string;
    romanization: string;
    isCorrect: boolean;
  }[];
}

export default function LessonPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const toast = useToast();

  const type = (searchParams.get('type') || 'hangul') as 'hangul' | 'katakana' | 'hiragana';
  const level = (searchParams.get('level') || 'mudah') as 'mudah' | 'menengah' | 'sulit';

  const { initSession, session, updateProgress } = useAppStore();

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState('');
  const [loadingHint, setLoadingHint] = useState(false);

  // Initialize session
  useEffect(() => {
    if (!session) {
      initSession();
    }
  }, [session, initSession]);

  // Load questions
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);

        // Level mudah: gunakan characters.ts
        if (level === 'mudah') {
          const characters = getCharactersByLevel(type, level);
          
          if (characters.length < 4) {
            toast({
              title: 'Error',
              description: 'Not enough characters for this level',
              status: 'error',
              duration: 3000,
            });
            setIsLoading(false);
            return;
          }

          // Create quiz questions (shuffle and limit to 10)
          const shuffled = [...characters].sort(() => Math.random() - 0.5);
          const cleanLabel = (value?: string) => {
            if (!value) return '';
            // Hapus kata konsonan/vokal/double dan karakter non-huruf, sisakan huruf jawaban saja
            const stripped = value.replace(/konsonan|vokal|double/gi, ' ');
            const lettersOnly = stripped.replace(/[^A-Za-z]+/g, ' ').trim();
            return lettersOnly || value.trim();
          };

          const quizzes: QuizQuestion[] = shuffled.slice(0, 10).map((char) => {
            // Get 3 random wrong options
            const wrongOptions = characters
              .filter((c) => c.id !== char.id)
              .sort(() => Math.random() - 0.5)
              .slice(0, 3);

            const answerText = cleanLabel(char.meaning) || cleanLabel(char.romanization) || char.character;
            const options = [
              { id: char.id, text: answerText, romanization: '', isCorrect: true },
              ...wrongOptions.map(w => {
                const wrongText = cleanLabel(w.meaning) || cleanLabel(w.romanization) || w.character;
                return { id: w.id, text: wrongText, romanization: '', isCorrect: false };
              })
            ].sort(() => Math.random() - 0.5);

            return {
              id: char.id,
              character: char.character,
              romanization: '',
              meaning: char.meaning || '',
              options,
            };
          });

          setQuestions(quizzes);
        } 
        // Level menengah & sulit: gunakan AI
        else {
          toast({
            title: 'Generating Quiz with AI...',
            description: 'Please wait while we create personalized questions',
            status: 'info',
            duration: 2000,
          });

          const aiQuestions = await generateAIQuiz(type, level as 'menengah' | 'sulit', 10);
          setQuestions(aiQuestions);

          toast({
            title: 'Quiz Ready! 🎯',
            description: 'AI has generated your personalized quiz',
            status: 'success',
            duration: 2000,
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading questions:', error);
        toast({
          title: 'Error',
          description: error instanceof Error ? error.message : 'Failed to load quiz',
          status: 'error',
          duration: 5000,
        });
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [type, level, toast]);

  const handleAnswer = (optionId: string) => {
    if (showResult) return;

    setSelectedAnswer(optionId);
    setShowResult(true);

    const currentQ = questions[currentQuestionIndex];
    const selectedOption = currentQ.options.find(opt => opt.id === optionId);
    const isCorrect = selectedOption?.isCorrect || false;

    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: '✓ Benar!',
        description: `${currentQ.character} = ${selectedOption?.text}`,
        status: 'success',
        duration: 2000,
      });
    } else {
      const correctOption = currentQ.options.find(opt => opt.isCorrect);
      toast({
        title: '✗ Salah!',
        description: `Jawaban yang benar: ${correctOption?.text}`,
        status: 'error',
        duration: 2000,
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
      setHint('');
    } else {
      // Quiz finished
      handleFinish();
    }
  };

  const handleHint = async () => {
    if (level === 'mudah') return; // no hints for easy level

    if (!questions[currentQuestionIndex]) return;

    setLoadingHint(true);
    try {
      const currentQ = questions[currentQuestionIndex];
      const hintText = await generateAIHint(currentQ.character, currentQ.romanization, type);
      setHint(hintText);
      setShowHint(true);
    } catch (error) {
      toast({
        title: 'Error getting hint',
        description: 'Gagal mendapatkan petunjuk dari AI',
        status: 'error',
        duration: 2000,
      });
    } finally {
      setLoadingHint(false);
    }
  };

  const handleFinish = () => {
    const finalScore = (score / questions.length) * 100;
    updateProgress(type, level, {
      completedQuizzes: [...(useAppStore.getState().getProgress(type, level)?.completedQuizzes || []), Date.now()],
      correctAnswers: score,
      totalAttempts: questions.length,
      score: Math.round(finalScore),
    });

    toast({
      title: `Quiz Selesai!`,
      description: `Nilai Anda: ${Math.round(finalScore)}%`,
      status: 'success',
      duration: 3000,
    });

    setTimeout(() => {
      router.push(`/learn?type=${type}`);
    }, 1000);
  };

  const handleBackToLearn = () => {
    router.push(`/learn?type=${type}`);
  };

  if (isLoading) {
    return (
      <Flex minH="100vh" align="center" justify="center">
        <Spinner size="xl" color="green.500" />
      </Flex>
    );
  }

  if (questions.length === 0) {
    return (
      <Container maxW="container.lg" py={10}>
        <VStack spacing={6} align="center">
          <Heading color="red.500">Tidak ada karakter tersedia</Heading>
          <Button colorScheme="green" onClick={handleBackToLearn}>
            Kembali ke Pembelajaran
          </Button>
        </VStack>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Container
      maxW={{ base: '100%', sm: 'container.sm', md: 'container.md', lg: 'container.lg', xl: 'container.lg' }}
      py={{ base: 3, sm: 4, md: 6, lg: 8 }}
      px={{ base: 3, sm: 4, md: 6, lg: 8 }}
    >
      {/* Header */}
      <Flex
        justify="space-between"
        align={{ base: 'start', sm: 'start', md: 'center' }}
        mb={{ base: 4, sm: 5, md: 6 }}
        gap={{ base: 3, md: 4 }}
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
      >
        <VStack align="start" spacing={{ base: 1, md: 0 }}>
          <Badge colorScheme="green" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} mb={2}>
            {type.toUpperCase()} - {level.toUpperCase()}
          </Badge>
          <Heading size={{ base: 'sm', sm: 'sm', md: 'md' }}>
            Soal {currentQuestionIndex + 1} dari {questions.length}
          </Heading>
        </VStack>
        <HStack spacing={{ base: 2, sm: 3, md: 4 }} width={{ base: 'full', md: 'auto' }} justify={{ base: 'space-between', md: 'flex-end' }}>
          <Badge colorScheme="purple" fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>
            Skor: {score}/{questions.length}
          </Badge>
          <Button size={{ base: 'xs', sm: 'sm', md: 'sm' }} variant="outline" onClick={handleBackToLearn}>
            Keluar
          </Button>
        </HStack>
      </Flex>

      {/* Progress Bar */}
      <Progress
        value={progress}
        size={{ base: 'sm', md: 'md' }}
        colorScheme="green"
        mb={{ base: 5, md: 8 }}
        borderRadius="full"
      />

      {/* Question Card */}
      <Box
        bg="white"
        _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
        p={{ base: 4, sm: 5, md: 8 }}
        borderRadius={{ base: 'lg', md: 'xl' }}
        boxShadow={{ base: '0 4px 6px rgba(0,0,0,0.07)', md: '0 10px 30px rgba(0,0,0,0.1)' }}
        _dark={{ boxShadow: { base: '0 4px 6px rgba(0,0,0,0.2)', md: '0 10px 30px rgba(0,0,0,0.3)' } }}
        mb={{ base: 5, md: 8 }}
        textAlign="center"
        border="1px solid"
        borderColor="gray.200"
      >
        <Text fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} color="gray.500" _dark={{ color: 'gray.400' }} mb={{ base: 3, md: 4 }}>
          {INDONESIAN.quiz.selectCharacter}
        </Text>
        <Text fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} mb={{ base: 4, md: 6 }} fontWeight="bold" lineHeight="1.2">
          {currentQuestion.character}
        </Text>
        {currentQuestion.romanization && (
          <Text fontSize={{ base: 'sm', sm: 'md', md: 'md' }} color="gray.600" _dark={{ color: 'gray.300' }}>
            Romanisasi: {currentQuestion.romanization}
          </Text>
        )}
      </Box>

      {/* Options */}
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing={{ base: 3, sm: 3, md: 4 }} mb={{ base: 5, md: 8 }}>
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = option.isCorrect;
          let bgColor = 'white';
          let borderColor = 'gray.200';
          let darkBg = 'gray.700';
          let darkBorder = 'gray.600';
          let textColor = 'black';
          let darkText = 'white';

          if (showResult) {
            if (isCorrect) {
              bgColor = 'green.50';
              borderColor = 'green.500';
              darkBg = 'green.900';
              darkBorder = 'green.500';
            } else if (isSelected && !isCorrect) {
              bgColor = 'red.50';
              borderColor = 'red.500';
              darkBg = 'red.900';
              darkBorder = 'red.500';
            }
          } else if (isSelected) {
            bgColor = 'blue.50';
            borderColor = 'blue.500';
            darkBg = 'blue.900';
            darkBorder = 'blue.500';
          }

          return (
            <Button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              disabled={showResult}
              bg={bgColor}
              _dark={{ bg: darkBg }}
              borderWidth={{ base: 1.5, md: 2 }}
              borderColor={borderColor}
              _dark={{ borderColor: darkBorder }}
              p={{ base: 3, sm: 4, md: 6 }}
              height="auto"
              minH={{ base: '12', sm: '14', md: '16' }}
              cursor={showResult ? 'default' : 'pointer'}
              transition="all 0.3s"
              _hover={!showResult ? { borderColor: 'blue.500', _dark: { borderColor: 'blue.400' }, transform: 'translateY(-2px)' } : {}}
              color={textColor}
              _dark={{ color: darkText }}
              borderRadius={{ base: 'md', md: 'lg' }}
            >
              <VStack spacing={{ base: 1, md: 2 }}>
                <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} fontWeight="bold" wordBreak="break-word">
                  {option.text}
                </Text>
                {option.romanization && (
                  <Text fontSize={{ base: 'xs', sm: 'sm', md: 'sm' }} color="gray.600" _dark={{ color: 'gray.300' }}>
                    ({option.romanization})
                  </Text>
                )}
              </VStack>
            </Button>
          );
        })}
      </SimpleGrid>

      {/* Hint & Actions */}
      <Flex gap={{ base: 2, md: 4 }} mb={{ base: 4, md: 6 }} flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
        {level !== 'mudah' && (
          <Button
            colorScheme="yellow"
            variant="outline"
            onClick={handleHint}
            isLoading={loadingHint}
            disabled={showResult || showHint}
            flex={1}
            size={{ base: 'sm', sm: 'sm', md: 'md' }}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            💡 {INDONESIAN.quiz.hint}
          </Button>
        )}
        {showResult && (
          <Button
            colorScheme="green"
            onClick={handleNext}
            flex={1}
            isDisabled={!selectedAnswer}
            size={{ base: 'sm', sm: 'sm', md: 'md' }}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Lanjut →' : 'Selesai'}
          </Button>
        )}
      </Flex>

      {/* Hint Display */}
      {level !== 'mudah' && showHint && hint && (
        <Box
          bg="yellow.50"
          _dark={{ bg: 'yellow.900' }}
          border="1px solid"
          borderColor="yellow.200"
          _dark={{ borderColor: 'yellow.700' }}
          p={{ base: 3, sm: 4, md: 4 }}
          borderRadius={{ base: 'md', md: 'lg' }}
          mb={{ base: 4, md: 6 }}
        >
          <Text fontSize={{ base: 'xs', sm: 'sm', md: 'sm' }} color="yellow.800" _dark={{ color: 'yellow.200' }} lineHeight="1.6">
            <strong>Petunjuk:</strong> {hint}
          </Text>
        </Box>
      )}
    </Container>
  );
}
