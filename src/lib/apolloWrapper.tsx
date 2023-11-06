'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';

const isDevelopment = process.env.NODE_ENV !== 'production';
// 현재 로컬만 입력해놔서 배포 후 수정 필수
const apiUrl = isDevelopment
  ? 'http://localhost:3000/api/graphql'
  : 'https://example.com/api/graphql';
function makeClient() {
  const httpLink = new HttpLink({
    uri: apiUrl,
    fetchOptions: { cache: 'force-cache' }
  });
  const linkOptions = typeof window === 'undefined';
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: linkOptions
      ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), httpLink])
      : httpLink
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
