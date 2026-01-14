'use client';

import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  Divider,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';

export function Footer() {
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Box bg={bgColor} borderTop={`1px solid ${borderColor}`}>
      <Container maxW="container.lg" py={{ base: 12, md: 16 }}>
        <VStack spacing={10} align="stretch">
          {/* Main Links Section */}
          <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={{ base: 8, md: 10 }}>
            {/* Brand */}
            <VStack spacing={4} align="start">
              <Box>
                <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                  Genki AI
                </Text>
                <Text fontSize="xs" color={textColor} mt={1}>
                  Belajar bahasa dengan AI
                </Text>
              </Box>
            </VStack>

            {/* Pembelajaran */}
            <VStack spacing={3} align="start">
              <Text fontWeight="bold" fontSize="sm" color={headingColor}>
                Pembelajaran
              </Text>
              <ChakraLink as={Link} href="/learn" color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }}>
                Mulai Belajar
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="#levels">
                Pilih Level
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="#features">
                Fitur Unggulan
              </ChakraLink>
            </VStack>

            {/* Akun */}
            <VStack spacing={3} align="start">
              <Text fontWeight="bold" fontSize="sm" color={headingColor}>
                Akun
              </Text>
              <ChakraLink as={Link} href="/dashboard" color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }}>
                Dashboard
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="#pricing">
                Paket Berlangganan
              </ChakraLink>
            </VStack>

            {/* Informasi */}
            <VStack spacing={3} align="start">
              <Text fontWeight="bold" fontSize="sm" color={headingColor}>
                Informasi
              </Text>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="mailto:support@genkiai.com">
                Email Kami
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="#privacy">
                Kebijakan Privasi
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500', fontWeight: 'semibold' }} href="#terms">
                Syarat & Ketentuan
              </ChakraLink>
            </VStack>
          </SimpleGrid>

          <Divider borderColor={borderColor} />

          {/* Social & Copyright */}
          <VStack spacing={4} align="stretch">
            {/* Social Media */}
            <HStack justify="center" spacing={6}>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500' }} href="https://twitter.com" target="_blank">
                Twitter
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500' }} href="https://instagram.com" target="_blank">
                Instagram
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500' }} href="https://youtube.com" target="_blank">
                YouTube
              </ChakraLink>
              <ChakraLink color={textColor} fontSize="sm" _hover={{ color: 'green.500' }} href="https://tiktok.com" target="_blank">
                TikTok
              </ChakraLink>
            </HStack>

            {/* Copyright */}
            <VStack spacing={2} align="center">
              <Text fontSize="sm" color={textColor} textAlign="center">
                © 2026 Genki AI. Semua hak dilindungi.
              </Text>
              <Text fontSize="xs" color={textColor} textAlign="center">
                Belajar Hangul 🇰🇷 • Katakana 🇯🇵 • Hiragana 🗾 dengan Gemini AI
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
