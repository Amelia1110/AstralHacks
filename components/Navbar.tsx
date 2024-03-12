import { Major_Mono_Display, Raleway, Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

  })

const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    variable: '--font-major_mono_display',
    weight: '400'
})
export default function Navbar() {
    const links = [
        { title: "Apply Now", route: "apply-now" },
        { title: "Event Info", route: "event-info" },
        { title: "Sponsors", route: "sponsor-info" },
        { title: "FAQ", route: "faq" },
        { title: "Our Team", route: "team" },

    ]
    // Maybe name changes? Apply Now --> Apply, Sponsor Info --> Sponsors, 
    // Event Info --> About Us (?) maybe idk use judgement. 
    return (
        <nav className="flex justify-between items-center h-20 p-10">
            <Link href="/testParallax" className={`${majorMonoDisplay.variable} font-heading text-white drop-shadow-md`}>
                <Image src="/AstralHacksLogoWhite.png" alt="Logo" width={65} height={65} className="inline-flex" /> </Link>
            <ul className={`${robotoMono.variable} font-text font-light text-xl flex justify-start gap-12 list-none text-white drop-shadow-md`}>
                {links.map((link) => (
                    <li key={link.title}>
                        <Link href={`/${link.route}`}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
