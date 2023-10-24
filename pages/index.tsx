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
      <p className ="text-gray-50">
 hello everyone CAN YOU SEE THIS PLEASE PLEASE PLEASE </p>

 <button className="bg-sky-500 hover:bg-sky-700">
  $500 yummy yummy 
</button>

    </main>
  )
}
