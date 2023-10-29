import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
        <header>
          <Navbar />
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
