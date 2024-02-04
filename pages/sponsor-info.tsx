import { Major_Mono_Display, Raleway, Roboto_Mono } from 'next/font/google';
import Head from 'next/head'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function SponsorInfo() {
  return (
    <div className="pt-20 w-full h-full">
      <div className='flex w-full justify-center items-center'>
        <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>MEET OUR SPONSORS</h1>
      </div>
    </div>
  )
}