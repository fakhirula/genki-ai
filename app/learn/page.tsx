'use client';

import { useSearchParams } from 'next/navigation';
import {
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Button,
  VStack,
  HStack,
  Text,
  Box,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import { INDONESIAN, LEARNING_TYPES, LEARNING_LEVELS } from '@/constants';
import { getCharactersByLevel } from '@/data/characters';

export default function LearnPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  if (type && Object.keys(LEARNING_TYPES).includes(type)) {
    return (
      <Container maxW="container.lg" py={10}>
        <VStack spacing={10} align="stretch">
          <Box>
            <Link href="/learn">
              <Button variant="ghost" mb={4}>
                ← {INDONESIAN.common.back}
              </Button>
            </Link>
            <Heading as="h1" size="xl" mt={4}>
              🎯 Belajar {LEARNING_TYPES[type as keyof typeof LEARNING_TYPES]}
            </Heading>
            <Text color="gray.500" mt={2}>
              Pilih level kesulitan untuk memulai pelajaran
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {Object.entries(LEARNING_LEVELS).map(([level, label]) => {
              const characters = getCharactersByLevel(
                type as 'hangul' | 'katakana' | 'hiragana',
                level as 'mudah' | 'menengah' | 'sulit'
              );
              
              const icons = {
                mudah: '🌱',
                menengah: '📈',
                sulit: '🏆'
              };
              
              const descriptions = {
                mudah: 'Belajar huruf-huruf dasar',
                menengah: 'Belajar kata-kata',
                sulit: 'Belajar kalimat lengkap'
              };

              return (
                <Card 
                  key={level} 
                  cursor="pointer" 
                  className="card-3d"
                  _hover={{ shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <CardBody>
                    <VStack spacing={4} align="start">
                      <HStack justify="space-between" w="full">
                        <Heading size="md">{icons[level as keyof typeof icons]} {label}</Heading>
                        <Badge colorScheme="green">{characters.length} karakter</Badge>
                      </HStack>
                      
                      <Text fontSize="sm" color="gray.600">
                        {descriptions[level as keyof typeof descriptions]}
                      </Text>
                      
                      <Link href={`/lesson?type=${type}&level=${level}`} style={{ width: '100%' }}>
                        <Button colorScheme="green" w="full" boxShadow="0 10px 20px rgba(34,197,94,0.2)">
                          Mulai Belajar →
                        </Button>
                      </Link>
                    </VStack>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={10} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={2}>
            📚 {INDONESIAN.learn.title}
          </Heading>
          <Text color="gray.500">
            Pilih bahasa yang ingin Anda pelajari
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {Object.entries(LEARNING_TYPES).map(([key, label]) => {
            const hangulCount = getCharactersByLevel(key as 'hangul' | 'katakana' | 'hiragana', 'mudah').length +
                               getCharactersByLevel(key as 'hangul' | 'katakana' | 'hiragana', 'menengah').length +
                               getCharactersByLevel(key as 'hangul' | 'katakana' | 'hiragana', 'sulit').length;
            
            const emojis = {
              hangul: '🇰🇷',
              katakana: '🇯🇵',
              hiragana: '🗾'
            };
            
            const descriptions = {
              hangul: 'Alfabet Korea - 14 konsonan + vokal',
              katakana: 'Silabi Jepang untuk kata asing',
              hiragana: 'Silabi Jepang asli Jepang'
            };

            return (
              <Card 
                key={key} 
                cursor="pointer" 
                className="card-3d"
                _hover={{ shadow: '0 20px 40px rgba(34,197,94,0.2)' }}
              >
                <CardBody>
                  <VStack spacing={4} align="start">
                    <Box fontSize="4xl">
                      {emojis[key as keyof typeof emojis]}
                    </Box>
                    <VStack spacing={0} align="start" w="full">
                      <Heading size="md">{label}</Heading>
                      <Badge colorScheme="purple" mt={2}>{hangulCount} karakter</Badge>
                    </VStack>
                    
                    <Text fontSize="sm" color="gray.600">
                      {descriptions[key as keyof typeof descriptions]}
                    </Text>
                    
                    <Link href={`/learn?type=${key}`} style={{ width: '100%' }}>
                      <Button colorScheme="green" w="full" boxShadow="0 10px 20px rgba(34,197,94,0.2)">
                        {INDONESIAN.common.continue} →
                      </Button>
                    </Link>
                  </VStack>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
