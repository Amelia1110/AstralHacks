import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

})

export default function ApplicationPage() {
    return (
        <main id="application-page" className="py-6">
                <div className='flex w-full justify-center items-center'>
                    <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right`}>APPLICATIONS CLOSED</h1>
                </div>
                <div className="w-full items-center mt-10">
                    <p className={`${robotoMono.variable} font-text font-light text-center leading-relaxed text-white text-3xl mx-56`}>
                        Let&apos;s Keep in Touch!
                    </p>
                </div>
        </main>
    );
}