import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

})

export default function FooterSection(ref: any) {
    return (
        <main id="footer-section" className="w-full h-64 relative flex place-content-center">
            <div className="bg-black opacity-45 border rounded-lg shadow-md border-white absolute top-32 z-20">
                <div className="flex gap-6 py-2 px-4">
                    <Link href="https://www.instagram.com/astral_hacks/" target="_blank">
                        <FaInstagram className="text-white text-4xl"/>
                    </Link>
                    <Link href="https://www.linkedin.com/company/astral-hacks/" target="_blank">
                        <FaLinkedin className="text-white text-4xl"/>
                    </Link>
                    <Link href="https://mail.google.com/mail/?view=cm&to=astralhacks.info@gmail.com" target="_blank" className="flex gap-3 items-center">
                        <MdEmail className="text-white text-4xl"/>
                        <p className={`${robotoMono.variable} font-text text-white`}>astralhacks.info@gmail.com</p>
                    </Link>
                    
                </div>
            </div>
            <Image src="/moon.png" alt="moon" width={100} height={100} className="absolute inset-0 z-10"/>
        </main> 
    );
}