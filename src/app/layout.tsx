import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { ApolloWrapper } from '../lib/apolloWrapper';
import { Providers } from '../redux/provider';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], preload: true });

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
    <html lang="ko">
      <body className={inter.className}>
        <ApolloWrapper>
          <Providers>{children}</Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
}
