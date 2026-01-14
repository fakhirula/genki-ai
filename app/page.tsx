'use client';

import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  VStack,
  HStack,
  Divider,
  Icon,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { INDONESIAN, LEARNING_TYPES, LEARNING_LEVELS } from '@/constants';
import { ArrowForwardIcon, CheckIcon, StarIcon } from '@chakra-ui/icons';

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.900');
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-br, #22c55e 0%, #16a34a 50%, #15803d 100%)"
        py={{ base: 16, md: 24 }}
        color="white"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          bg: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          bg: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      >
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
            {/* Badge */}
            <Badge
              colorScheme="whiteAlpha"
              variant="outline"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              className="float-animation"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              ✨ Belajar dengan Cara Baru
            </Badge>

            {/* Main Heading */}
            <VStack spacing={4}>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="800"
                lineHeight="1.2"
                maxW="3xl"
                letterSpacing="-0.02em"
              >
                Kuasai Hangul, Katakana & Hiragana Dengan AI
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} maxW="2xl" opacity={0.95}>
                Platform pembelajaran interaktif dengan Gemini AI yang membantu Anda menguasai karakter bahasa Korea dan Jepang dengan mudah, cepat, dan menyenangkan.
              </Text>
            </VStack>

            {/* CTA Buttons */}
            <HStack spacing={4} pt={4} justify="center" flexWrap="wrap">
              <Link href="/learn">
                <Button
                  size="lg"
                  bg="white"
                  color="green.600"
                  fontWeight="bold"
                  _hover={{
                    bg: 'gray.100',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                  }}
                  transition="all 0.4s cubic-bezier(0.23, 1, 0.320, 1)"
                  rightIcon={<ArrowForwardIcon />}
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  Mulai Belajar Sekarang
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                fontWeight="bold"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </HStack>

            {/* Stats */}
            <SimpleGrid columns={{ base: 3, md: 3 }} spacing={8} pt={8} w="full">
              <VStack>
                <Heading size="lg">3</Heading>
                <Text fontSize="sm">Jenis Bahasa</Text>
              </VStack>
              <VStack>
                <Heading size="lg">60+</Heading>
                <Text fontSize="sm">Karakter</Text>
              </VStack>
              <VStack>
                <Heading size="lg">3</Heading>
                <Text fontSize="sm">Level</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          {/* Section Header */}
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="green" variant="subtle" fontSize="md">
              Mengapa Genki AI?
            </Badge>
            <Heading as="h2" size="xl" maxW="2xl" mx="auto">
              Fitur-Fitur Unggulan Kami
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="2xl">
              Dirancang untuk membuat pembelajaran bahasa menjadi lebih efektif dan menyenangkan
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {/* Feature 1 */}
            <Card
              bg={cardBg}
              borderRadius="xl"
              border={`1px solid ${borderColor}`}
              className="card-3d"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <CardBody>
                <VStack spacing={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="lg"
                    bg="green.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    style={{
                      boxShadow: '0 8px 16px rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    🤖
                  </Box>
                  <VStack spacing={2} align="start">
                    <Heading size="md">AI Gemini Terpadu</Heading>
                    <Text color="gray.600" lineHeight="tall">
                      Dapatkan penjelasan instan, hint otomatis, dan umpan balik personal dari AI canggih.
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Feature 2 */}
            <Card
              bg={cardBg}
              borderRadius="xl"
              border={`1px solid ${borderColor}`}
              className="card-3d"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <CardBody>
                <VStack spacing={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="lg"
                    bg="blue.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                  >
                    📊
                  </Box>
                  <VStack spacing={2} align="start">
                    <Heading size="md">Belajar Sesuai Kecepatan Anda</Heading>
                    <Text color="gray.600" lineHeight="tall">
                      3 tingkat kesulitan: Mudah, Menengah, dan Sulit. Maju sesuai kemampuan Anda.
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Feature 3 */}
            <Card
              bg={cardBg}
              borderRadius="xl"
              border={`1px solid ${borderColor}`}
              className="card-3d"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <CardBody>
                <VStack spacing={4} align="start">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="lg"
                    bg="pink.100"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    style={{
                      boxShadow: '0 8px 16px rgba(236, 72, 153, 0.3)',
                    }}
                  >
                    ✨
                  </Box>
                  <VStack spacing={2} align="start">
                    <Heading size="md">Interface yang Intuitif</Heading>
                    <Text color="gray.600" lineHeight="tall">
                      Desain yang clean dan user-friendly dalam bahasa Indonesia yang mudah dipahami.
                    </Text>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Learning Types Section */}
      <Box bg={cardBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.lg">
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="cyan" variant="subtle" fontSize="md">
                Pilih Bahasa Anda
              </Badge>
              <Heading as="h2" size="xl">
                {INDONESIAN.learn.selectType}
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Pilih salah satu dari ketiga bahasa yang ingin Anda pelajari
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {Object.entries(LEARNING_TYPES).map(([key, label]) => {
                const icons: Record<string, string> = {
                  hangul: '🇰🇷',
                  katakana: '🇯🇵',
                  hiragana: '🗾',
                };
                const descriptions: Record<string, string> = {
                  hangul: 'Pelajari alfabet Korea yang logis dan sistematis dengan 14 konsonan dasar.',
                  katakana: 'Kuasai silabi Jepang untuk kata-kata asing dengan lebih efisien.',
                  hiragana: 'Pahami silabi Jepang untuk kata-kata asli Jepang dan kata kerja.',
                };

                return (
                  <Card
                    key={key}
                    cursor="pointer"
                    bg={bgColor}
                    borderRadius="xl"
                    border={`2px solid transparent`}
                    className="card-3d"
                    style={{
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                    _hover={{
                      borderColor: 'green.500',
                      boxShadow: '0 25px 50px rgba(34, 197, 94, 0.2)',
                      transform: 'translateY(-6px) scale(1.02)',
                    }}
                  >
                    <CardBody>
                      <VStack spacing={4} align="start">
                        <Box
                          fontSize="4xl"
                          style={{
                            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))',
                          }}
                        >
                          {icons[key]}
                        </Box>
                        <VStack spacing={2} align="start" w="full">
                          <Heading size="md">{label}</Heading>
                          <Text color="gray.600" fontSize="sm" lineHeight="tall">
                            {descriptions[key]}
                          </Text>
                        </VStack>
                        <Link href={`/learn?type=${key}`} style={{ width: '100%' }}>
                          <Button
                            colorScheme="green"
                            w="full"
                            size="sm"
                            rightIcon={<ArrowForwardIcon />}
                          >
                            Mulai Belajar
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
      </Box>

      {/* Levels Section */}
      <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="orange" variant="subtle" fontSize="md">
              Tingkat Kesulitan
            </Badge>
            <Heading as="h2" size="xl">
              {INDONESIAN.learn.selectLevel}
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Mulai dari tingkat dasar hingga advanced sesuai kemampuan Anda
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {Object.entries(LEARNING_LEVELS).map(([key, label]) => {
              const levelInfo: Record<string, { icon: string; desc: string; color: string }> = {
                mudah: {
                  icon: '🌱',
                  desc: 'Belajar huruf-huruf dasar untuk membangun fondasi yang kuat',
                  color: 'green',
                },
                menengah: {
                  icon: '📈',
                  desc: 'Pelajari kata-kata umum dan tingkatkan kosakata Anda',
                  color: 'blue',
                },
                sulit: {
                  icon: '🏆',
                  desc: 'Latihan kalimat lengkap untuk menguasai bahasa sepenuhnya',
                  color: 'orange',
                },
              };

              const info = levelInfo[key];
              return (
                <Card
                  key={key}
                  bg={bgColor}
                  borderRadius="xl"
                  className="card-3d"
                  style={{
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardBody>
                    <VStack spacing={4} align="start">
                      <Box
                        fontSize="3xl"
                        style={{
                          filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <VStack spacing={3} align="start" w="full">
                        <Heading size="md">{label}</Heading>
                        <Text color="gray.600" fontSize="sm" lineHeight="tall">
                          {info.desc}
                        </Text>
                        <HStack spacing={2} pt={2}>
                          <CheckIcon w={4} h={4} color={`${info.color}.500`} />
                          <Text fontSize="xs" color="gray.600">
                            {key === 'mudah' && 'Sempurna untuk pemula'}
                            {key === 'menengah' && 'Tantangan yang menyenangkan'}
                            {key === 'sulit' && 'Untuk yang serius menguasai'}
                          </Text>
                        </HStack>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Why Genki AI Section */}
      <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="green" variant="subtle" fontSize="md">
              Keunggulan Kami
            </Badge>
            <Heading as="h2" size="xl" maxW="2xl" mx="auto">
              Mengapa Memilih Genki AI?
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="2xl">
              Fitur-fitur lengkap yang dirancang untuk memaksimalkan pembelajaran Anda
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {[
              {
                icon: '🧠',
                title: 'Powered by AI',
                desc: 'Dukungan Gemini AI untuk penjelasan dan hint yang personal',
              },
              {
                icon: '🎯',
                title: 'Sistem Spaced Repetition',
                desc: 'Teknologi ANKI untuk memori jangka panjang yang optimal',
              },
              {
                icon: '💰',
                title: '100% Gratis',
                desc: 'Akses semua fitur dasar tanpa biaya selamanya',
              },
              {
                icon: '🎮',
                title: 'Seru & Interaktif',
                desc: 'Gamifikasi dan quizzes yang membuat belajar menjadi menyenangkan',
              },
              {
                icon: '⚡',
                title: 'Efektif & Terbukti',
                desc: 'Metode pembelajaran yang telah terbukti meningkatkan retensi',
              },
              {
                icon: '📱',
                title: 'Kapan Saja, Di Mana Saja',
                desc: 'Belajar offline atau online sesuai kenyamanan Anda',
              },
              {
                icon: '👤',
                title: 'Pembelajaran Dipersonalisasi',
                desc: 'Sistem adaptif yang menyesuaikan dengan kecepatan Anda',
              },
              {
                icon: '🏆',
                title: 'Ambil Sertifikasi',
                desc: 'Dapatkan sertifikat resmi setelah menyelesaikan kursus',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                bg={bgColor}
                borderRadius="xl"
                border={`1px solid ${borderColor}`}
                className="card-3d"
                style={{
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <CardBody>
                  <VStack spacing={3} align="start">
                    <Box
                      fontSize="2xl"
                      style={{
                        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <VStack spacing={1} align="start">
                      <Heading size="sm">{item.title}</Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="tall">
                        {item.desc}
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Download App Section */}
      <Box bg={cardBg} py={{ base: 16, md: 24 }}>
        <Container maxW="container.lg">
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="cyan" variant="subtle" fontSize="md">
                Belajar Lebih Mudah
              </Badge>
              <Heading as="h2" size="xl" maxW="2xl" mx="auto">
                Download Aplikasi Genki AI
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="2xl">
                Dapatkan akses penuh ke semua fitur dalam genggaman Anda. Sinkronisasi otomatis di semua perangkat
              </Text>
            </VStack>

            <HStack
              spacing={{ base: 4, md: 8 }}
              justify="center"
              flexWrap="wrap"
            >
              <Card
                bg={bgColor}
                borderRadius="xl"
                overflow="hidden"
                flex={{ base: '1 1 100%', sm: '1 1 auto' }}
                maxW="280px"
                className="card-3d"
                style={{
                  boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)',
                }}
              >
                <CardBody>
                  <VStack spacing={4} align="center">
                    <Box
                      fontSize="5xl"
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
                      }}
                    >
                      🤖
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="md">Android</Heading>
                      <Text fontSize="sm" color="gray.600" textAlign="center">
                        Kompatibel dengan Android 8.0+
                      </Text>
                    </VStack>
                    <Button
                      colorScheme="green"
                      w="full"
                      size="sm"
                      as="a"
                      href="https://play.google.com/store"
                      target="_blank"
                      style={{
                        boxShadow: '0 6px 14px rgba(34, 197, 94, 0.3)',
                      }}
                      _hover={{
                        boxShadow: '0 10px 20px rgba(34, 197, 94, 0.4)',
                        transform: 'translateY(-2px)',
                      }}
                    >
                      Download di Play Store
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              <Card
                bg={bgColor}
                borderRadius="xl"
                overflow="hidden"
                flex={{ base: '1 1 100%', sm: '1 1 auto' }}
                maxW="280px"
                className="card-3d"
                style={{
                  boxShadow: '0 15px 35px rgba(34, 197, 94, 0.15)',
                }}
              >
                <CardBody>
                  <VStack spacing={4} align="center">
                    <Box
                      fontSize="5xl"
                      style={{
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
                      }}
                    >
                      🍎
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="md">iOS</Heading>
                      <Text fontSize="sm" color="gray.600" textAlign="center">
                        Kompatibel dengan iOS 13.0+
                      </Text>
                    </VStack>
                    <Button
                      colorScheme="green"
                      w="full"
                      size="sm"
                      as="a"
                      href="https://apps.apple.com"
                      target="_blank"
                    >
                      Download di App Store
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Premium/Subscription Section */}
      <Container maxW="container.lg" py={{ base: 16, md: 24 }}>
        <VStack spacing={12} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="orange" variant="subtle" fontSize="md">
              Tingkatkan Pengalaman
            </Badge>
            <Heading as="h2" size="xl" maxW="2xl" mx="auto">
              Paket Premium Genki AI
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="2xl">
              Nikmati fitur-fitur eksklusif dengan paket berlangganan kami
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* Free Plan */}
            <Card
              bg={bgColor}
              borderRadius="xl"
              border={`2px solid ${borderColor}`}
              transition="all 0.3s"
            >
              <CardBody>
                <VStack spacing={6} align="start" h="full">
                  <VStack spacing={2} align="start">
                    <Heading size="md">Gratis</Heading>
                    <HStack spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">
                        Rp 0
                      </Text>
                      <Text fontSize="sm" color="gray.600">/selamanya</Text>
                    </HStack>
                  </VStack>

                  <VStack spacing={3} align="start" w="full">
                    {[
                      'Akses semua 60+ karakter',
                      '3 tingkat kesulitan',
                      'Quiz dan kuis',
                      'AI hint & penjelasan',
                      'Progress tracking dasar',
                    ].map((feature, idx) => (
                      <HStack key={idx} spacing={3}>
                        <CheckIcon w={4} h={4} color="green.500" />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button colorScheme="green" w="full" variant="outline">
                    Coba Gratis
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Pro Plan (Featured) */}
            <Card
              bg={bgColor}
              borderRadius="xl"
              border="2px solid"
              borderColor="green.500"
              className="card-3d"
              position="relative"
              transform="scale(1.05)"
              style={{
                boxShadow: '0 25px 50px rgba(34, 197, 94, 0.25)',
              }}
            >
              <Box
                position="absolute"
                top={-4}
                left="50%"
                transform="translateX(-50%)"
              >
                <Badge
                  colorScheme="green"
                  fontSize="md"
                  style={{
                    boxShadow: '0 8px 16px rgba(34, 197, 94, 0.3)',
                  }}
                >
                  ⭐ PALING POPULER
                </Badge>
              </Box>
              <CardBody pt={8}>
                <VStack spacing={6} align="start" h="full">
                  <VStack spacing={2} align="start">
                    <Heading size="md">Pro</Heading>
                    <HStack spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">
                        Rp 49.000
                      </Text>
                      <Text fontSize="sm" color="gray.600">/bulan</Text>
                    </HStack>
                  </VStack>

                  <VStack spacing={3} align="start" w="full">
                    {[
                      'Semua fitur Gratis +',
                      '🤖 AI Gemini unlimited',
                      '📊 Analisis progress detail',
                      '🎯 Personalized learning path',
                      '📝 Custom notes & flashcards',
                      '🌙 Mode pembelajaran offline',
                      '⚡ Prioritas support',
                    ].map((feature, idx) => (
                      <HStack key={idx} spacing={3}>
                        <CheckIcon w={4} h={4} color="green.500" />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Link href="/learn" style={{ width: '100%' }}>
                    <Button colorScheme="green" w="full" size="lg">
                      Upgrade ke Pro
                    </Button>
                  </Link>
                </VStack>
              </CardBody>
            </Card>

            {/* Premium Plan */}
            <Card
              bg={bgColor}
              borderRadius="xl"
              border={`2px solid ${borderColor}`}
              transition="all 0.3s"
            >
              <CardBody>
                <VStack spacing={6} align="start" h="full">
                  <VStack spacing={2} align="start">
                    <Heading size="md">Premium</Heading>
                    <HStack spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">
                        Rp 99.000
                      </Text>
                      <Text fontSize="sm" color="gray.600">/bulan</Text>
                    </HStack>
                  </VStack>

                  <VStack spacing={3} align="start" w="full">
                    {[
                      'Semua fitur Pro +',
                      '🏆 Sertifikasi resmi',
                      '👨‍🏫 Mentor 1-on-1 (30 min/bulan)',
                      '📚 Materi eksklusif advanced',
                      '🎓 Kelas grup mingguan',
                      '🌍 Komunitas premium',
                      '💎 Ad-free experience',
                    ].map((feature, idx) => (
                      <HStack key={idx} spacing={3}>
                        <CheckIcon w={4} h={4} color="green.500" />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button colorScheme="green" w="full" variant="outline">
                    Upgrade ke Premium
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          <Text textAlign="center" color="gray.600" fontSize="sm">
            💳 Semua paket dilengkapi garansi 7 hari uang kembali 100%
          </Text>
        </VStack>
      </Container>


      <Box
        bgGradient="linear(to-r, #22c55e 0%, #16a34a 100%)"
        py={{ base: 16, md: 20 }}
        color="white"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          bg: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      >
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <VStack spacing={4}>
              <Heading
                size="xl"
                maxW="2xl"
                letterSpacing="-0.02em"
              >
                Siap Memulai Perjalanan Belajar Anda?
              </Heading>
              <Text fontSize="lg" opacity={0.95} maxW="2xl">
                Tidak perlu login untuk memulai. Langsung akses semua fitur dan mulai belajar sekarang juga!
              </Text>
            </VStack>
            <Link href="/learn">
              <Button
                size="lg"
                bg="white"
                color="green.600"
                fontWeight="bold"
                _hover={{
                  bg: 'gray.100',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                }}
                transition="all 0.4s cubic-bezier(0.23, 1, 0.320, 1)"
                rightIcon={<ArrowForwardIcon />}
                style={{
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                }}
              >
                Mulai Belajar Sekarang
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
