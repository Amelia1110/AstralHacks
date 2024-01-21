import TitleSVG from '@/components/TitleSVG';
import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

export default function Home() {
  return (
    <main>
      <div className="grid justify-center">
        <div className="pt-[calc(50vh_-_135px)] pb-64">
          <TitleSVG/>
        </div>
        <p className={`${majorMonoDisplay.variable} font-heading text-center text-white text-xl`}>start your journey</p>
        <svg className="w-14 h-14 text-white justify-self-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.4" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </main>
  )
}