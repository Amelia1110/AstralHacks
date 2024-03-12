import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

})

var width = 150
var height = 150
var defaultStuff = `${robotoMono.variable} text-5xl self-center text-right font-heading text-white`

export default function TeamPage(ref: any) {
    return (
        <main id="team-page" className="py-48">
            <div className="flex justify-center items-center">
            <h1 className={`${robotoMono.variable} text-7xl text-right font-heading text-white`}>OUR TEAM</h1>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Leaders</h1>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Tech</h1>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Finance</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Logistics</h1>
                <img src="/alex.jpg" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Marketing</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
            <div className="flex justify-evenly pt-24">
                <h1 className={`${defaultStuff}`}>Operations</h1>

                <img src="/anon.png" width={width} height={height}/>
                <img src="/anon.png" width={width} height={height}/>
            </div>
        </main>
    );
}