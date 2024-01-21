import ContactUsFooter from '@/components/ContactUsSVG';
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
export default function EventInfo() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-col items-center pb-24 w-full">
            <Image className="mx-auto lg:w-64 md:w-52 w-40" src="/AstralHacksLogoWhite.png" alt="Astral Hacks Logo" width={250} height={250}/>
            <div className="mb-6 w-3/4 h-fit">
              <TitleSVG/>
            </div>
            <p className={`${majorMonoDisplay.variable} font-heading text-center w-fit h-fit text-white lg:text-5xl md:text-3xl text-xl tracking-wide`}>coming soon</p>
          </div>
          <div className="w-fit h-fit absolute bottom-6">
            <p className={`${raleway.variable} font-text text-center font-thin text-white lg:text-xl text-lg`}>In-Person | May 17-19, 2024</p>
            <ContactUsFooter/>
          </div>
        </div>
    )
}