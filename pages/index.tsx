import TitleSVG from '@/components/TitleSVG';
import { motion } from 'framer-motion';
import { Major_Mono_Display, Roboto_Mono } from 'next/font/google';
import {SlArrowDown} from 'react-icons/sl'

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col pt-[calc(50vh_-_135px)] pb-64 items-center gap-8 ">
          <TitleSVG/>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 2.8, delay: 0.9 }}
            >
            <p className={`${robotoMono.variable} font-heading font-semibold tracking-wide text-white text-4xl`}>
              MAY 17-19, 2024 | IN PERSON
            </p>
          </motion.div> 
        </div>
        <motion.div className="flex flex-col gap-2 hover:gap-4 transition-all duration-300 w-fit items-center"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 2.5, delay: 1.5 }}
        >
          <p className={`${majorMonoDisplay.variable} font-styled text-center text-white text-xl`}>start your journey</p>
          <SlArrowDown className="text-white text-2xl"/>
        </motion.div>
      </div>
    </main>
  )
}