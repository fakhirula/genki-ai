'use client';

import { useEffect } from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  VStack,
  HStack,
  Text,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Button,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import { INDONESIAN, LEARNING_TYPES } from '@/constants';
import { useAppStore } from '@/store/appStore';
import { getCharactersByLevel } from '@/data/characters';

export default function DashboardPage() {
  const { initSession, session, progress } = useAppStore();

  useEffect(() => {
    if (!session) {
      initSession();
    }
  }, [session, initSession]);

  const learningTypes = Object.entries(LEARNING_TYPES);
  const emojis = {
    hangul: '🇰🇷',
    katakana: '🇯🇵',
    hiragana: '🗾'
  };

  const totalCompleted = progress.reduce((acc, p) => acc + p.completedQuizzes.length, 0);
  const totalCorrect = progress.reduce((acc, p) => acc + p.correctAnswers, 0);
  const avgScore = progress.length > 0 
    ? Math.round(progress.reduce((acc, p) => acc + p.score, 0) / progress.length)
    : 0;

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="stretch">
        {/* Header */}
        <Box>
          <Heading as="h1" size="xl" mb={2}>
            📊 {INDONESIAN.nav.dashboard}
          </Heading>
          <Text color="gray.500">
            Pantau progres pembelajaran Anda
          </Text>
        </Box>

        {/* Stats Overview */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Quiz Diselesaikan</StatLabel>
                <StatNumber fontSize="3xl">{totalCompleted}</StatNumber>
                <StatHelpText>Total pelajaran</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Jawaban Benar</StatLabel>
                <StatNumber fontSize="3xl">{totalCorrect}</StatNumber>
                <StatHelpText>Akurasi pembelajaran</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card>
            <CardBody>
              <Stat>
                <StatLabel>Nilai Rata-rata</StatLabel>
                <StatNumber fontSize="3xl">{avgScore}%</StatNumber>
                <StatHelpText>Performa keseluruhan</StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Progress by Type */}
        <Box>
          <Heading size="md" mb={6}>
            📈 Progres Berdasarkan Tipe
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {learningTypes.map(([type, label]) => {
              const typeProgress = progress.find(p => p.type === type);
              const totalCharacters = 
                getCharactersByLevel(type as 'hangul' | 'katakana' | 'hiragana', 'mudah').length +
                getCharactersByLevel(type as 'hangul' | 'katakana' | 'hiragana', 'menengah').length +
                getCharactersByLevel(type as 'hangul' | 'katakana' | 'hiragana', 'sulit').length;
              
              const progressPercent = typeProgress 
                ? Math.round((typeProgress.correctAnswers / (typeProgress.totalAttempts || 1)) * 100)
                : 0;

              return (
                <Card key={type} className="card-3d">
                  <CardBody>
                    <VStack spacing={4} align="start" w="full">
                      <HStack justify="space-between" w="full">
                        <Text fontSize="2xl">
                          {emojis[type as keyof typeof emojis]}
                        </Text>
                        <Text fontWeight="bold">{label}</Text>
                      </HStack>

                      <VStack spacing={2} w="full" align="start">
                        <HStack justify="space-between" w="full">
                          <Text fontSize="sm" color="gray.600">
                            {typeProgress?.completedQuizzes.length || 0} quiz selesai
                          </Text>
                          <Badge colorScheme="green">{progressPercent}%</Badge>
                        </HStack>
                        <Progress 
                          value={progressPercent} 
                          size="sm" 
                          colorScheme="green"
                          w="full"
                          borderRadius="full"
                        />
                      </VStack>

                      <Text fontSize="xs" color="gray.500">
                        {typeProgress?.correctAnswers || 0}/{typeProgress?.totalAttempts || 0} jawaban benar
                      </Text>

                      <Link href={`/learn?type=${type}`} style={{ width: '100%' }}>
                        <Button colorScheme="green" size="sm" w="full">
                          Lanjutkan Belajar
                        </Button>
                      </Link>
                    </VStack>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </Box>

        {/* Quick Stats */}
        {progress.length > 0 && (
          <Box bg="green.50" p={6} borderRadius="lg" borderLeft="4px solid" borderColor="green.500">
            <VStack align="start" spacing={3}>
              <Heading size="sm">🎯 Ringkasan Pembelajaran</Heading>
              <Text fontSize="sm">
                Anda telah menyelesaikan <strong>{totalCompleted} quiz</strong> dengan rata-rata nilai <strong>{avgScore}%</strong>.
                Terus tingkatkan kemampuan Anda dengan belajar setiap hari!
              </Text>
            </VStack>
          </Box>
        )}

        {progress.length === 0 && (
          <Box bg="blue.50" p={6} borderRadius="lg" borderLeft="4px solid" borderColor="blue.500">
            <VStack align="start" spacing={3}>
              <Heading size="sm">🚀 Mulai Belajar Sekarang</Heading>
              <Text fontSize="sm">
                Anda belum mengikuti quiz apapun. Pilih jenis bahasa dan level untuk memulai pembelajaran Anda!
              </Text>
              <Link href="/learn">
                <Button colorScheme="blue" size="sm">
                  Ke Halaman Pembelajaran
                </Button>
              </Link>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
}
