import Image from 'next/image'
import { Inter } from 'next/font/google'
import motion from 'antd/es/_util/motion'
import TitleSVG from '@/components/TitleSVG'

export default function Home() {
  return (
    <main>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <TitleSVG/>
    </main>
  )
}
