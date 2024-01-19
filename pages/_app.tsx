import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const {pathname} = router

  return (
    <>
      <SessionProvider session={pageProps.session}>
      <Head>
        <title>Astral Hacks</title>
      </Head>
        <header>
          <Navbar/>
        </header> 
        <main>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </main>

      <Component {...pageProps}/>
      </SessionProvider>
    </>
  )
}