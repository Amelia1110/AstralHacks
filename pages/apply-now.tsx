import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

export default function ApplyNow() {
    return (
        <main className="grid place-content-center">
            <h1 className={`${majorMonoDisplay.variable} font-heading text-white text-6xl`}>Apply now</h1>
        </main>
    )
}