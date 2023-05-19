import { Store } from '@/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'reto'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider of={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}
