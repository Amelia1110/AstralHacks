import { Roboto_Mono } from 'next/font/google';
import sponsors from "@/public/sponsors.json";
import Image from 'next/image';

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
            <div className="flex justify-center mt-14">
                <div className="grid grid-cols-4 gap-10 w-3/4 justify-items-center justify-center">
                    {sponsors.map((sponsor) => {
                        console.log(sponsor.logo)
                        return (
                            <div key={sponsor.id}>
                                <Image src={`/${sponsor.logo}`} alt={`${sponsor.name}`} width={180} height={100} layout="responsive" className=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    );
}