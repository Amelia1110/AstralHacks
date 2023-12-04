import TitleSVG from '@/components/TitleSVG';
import { Major_Mono_Display, Raleway } from 'next/font/google';
import Image from 'next/image';

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]
})

export default function Home() {
  return (
    <main>
      <div className="grid justify-center">
        <Image src="/AstralHacksLogoWhite.png" alt="Description of the image" width={250} height={250} className="mx-auto pt-36"/>
        <div className="pb-6">
          <TitleSVG/>
        </div>
        <p className={`${majorMonoDisplay.variable} font-heading text-center text-white text-5xl tracking-wide`}>coming soon</p>
        <p className={`${raleway.variable} font-text text-center font-thin text-white text-xl pt-44`}>In-Person | May 17-19, 2024</p>
      </div>
    </main>
  )
}