'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import { globalStyles } from '@/styles/globalStyles';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <Global styles={globalStyles} />
      {children}
    </ChakraProvider>
  );
}
