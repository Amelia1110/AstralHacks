import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const {pathname} = router

  //parallax position tracking
  //https://www.youtube.com/watch?v=29UWA-GdA7k&ab_channel=TomIsLoading
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div>
      <SessionProvider session={pageProps.session}>
      <Head>
        <title>Astral Hacks</title>
      </Head>
      <header>
        <Navbar ref={ref}/>
      </header> 
      <main>
        <div className="w-full h-screen relative grid">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: backgroundY,
            }}
          >
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </motion.div>
          <Component {...pageProps} className="w-full h-full absolute"/>
        </div>
      </main>
      </SessionProvider>
    </div>

  )
}