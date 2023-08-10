'use client';
import { ApolloProvider } from '@apollo/client';
import { Inter } from 'next/font/google';

import { apolloClient } from '../lib/apolloClient';

import '../styles/globals.css';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LoL-CARD',
  description: '소환사 정보와 모스트챔피언으로 명함을 만들어봐요'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={apolloClient}>
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </ApolloProvider>
  );
}
