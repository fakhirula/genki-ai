'use client';

import { Container, Heading, Text, Box } from '@chakra-ui/react';
import { INDONESIAN } from '@/constants';

export default function AdminPage() {
  return (
    <Container maxW="container.lg" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          {INDONESIAN.admin.title}
        </Heading>
        <Text>Coming soon... 🚀</Text>
      </Box>
    </Container>
  );
}
