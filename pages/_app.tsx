import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const {pathname} = router
    
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Astral Hacks</title>
      </Head>
        <main>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </main>
      <Component {...pageProps} />
    </div>
  )
}
