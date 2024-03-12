import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

})

export default function SponsorPage(ref: any) {
    return (
        <main id="sponsor-page" className="py-48">
            <div className='flex w-full justify-center items-center'>
                <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>MEET OUR SPONSORS</h1>
            </div>
        </main>
    );
}