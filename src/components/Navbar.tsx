'use client';

import {
  Box,
  Flex,
  Button,
  Container,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { INDONESIAN } from '@/constants';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="green.600" py={4} color="white" shadow="md">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/">
            <Box fontSize="2xl" fontWeight="bold" cursor="pointer">
              {INDONESIAN.nav.title}
            </Box>
          </Link>

          {/* Menu */}
          <Flex gap={4} align="center">
            <Link href="/">
              <Button
                variant="ghost"
                color="white"
                _hover={{ bg: 'green.700' }}
              >
                {INDONESIAN.nav.home}
              </Button>
            </Link>

            <Link href="/learn">
              <Button
                variant="ghost"
                color="white"
                _hover={{ bg: 'green.700' }}
              >
                {INDONESIAN.nav.learn}
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                variant="ghost"
                color="white"
                _hover={{ bg: 'green.700' }}
              >
                {INDONESIAN.nav.dashboard}
              </Button>
            </Link>

            {/* Dark Mode Toggle */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color="white"
              _hover={{ bg: 'green.700' }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
