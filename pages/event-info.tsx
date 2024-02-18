import { Roboto_Mono } from 'next/font/google';
import Head from 'next/head'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function EventInfo() {
  return (
    <div className="pt-20 w-full h-full">
      <div className='flex w-full justify-center items-center'>
        <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>EVENT INFO</h1>
      </div>
      <div className="w-full items-center mt-10">
        <p className={`${robotoMono.variable} font-text font-light text-center leading-relaxed text-white text-xl mx-56`}>
          Join us this May for Astral Hacks, the ultimate in-person hackathon designed by high schoolers, for high schoolers!
          Dive into a 36-hour journey of innovation, where you&apos;ll create original tech projects, pitch to judges, and compete
          for prizes. Crafted in London, Ontario, Astral Hacks is your launchpad into the world of hacking, offering workshops, speakers, and
          fun events to equip you with the skills you need to tackle real-world problems with creativity and flair. Just like the
          stars guide us through the night sky, Astral Hacks will guide you on a journey of technological exploration, pushing
          boundaries and embracing limitless possibilities. Don&apos;t miss out - join us and reach for the stars!
        </p>
      </div>
    </div>
  )
}