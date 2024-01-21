import Head from 'next/head'
import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    variable: '--font-major_mono_display',
    weight: '400'
})

export default function SponsorInfo() {
    return (
        <>

        <Head>
            <title>Sponsors</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex justify-center items-center">
        <h1 className={`${majorMonoDisplay.variable} col-span-3 font-heading text-white text-8xl text-right pt-28`}>Sponsors</h1>
        </div>
        </>
    )
}   