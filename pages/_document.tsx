import Header from '@/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Astral Hacks"/>
      <body>
        <header>
          <Header />
        </header>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
