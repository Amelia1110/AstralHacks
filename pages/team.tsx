import Head from 'next/head'
import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    variable: '--font-major_mono_display',
    weight: '400'
})

var width = 150
var height = 150
var defaultStuff = "text-5xl self-center text-right font-heading text-white"

export default function SponsorInfo() {
    return (
        <>
            <Head>
                <title>Our Team</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center items-center">
            <h1 className={`${majorMonoDisplay.variable} text-8xl text-right font-heading text-white`}>Our Team</h1>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Leaders</h1>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Tech</h1>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Finance</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Logistics</h1>
                <img src="/alex.jpg" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Marketing</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${majorMonoDisplay.variable} ${defaultStuff}`}>Operations</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}   