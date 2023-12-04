import { Major_Mono_Display, Raleway } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: ['100',]
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
        { title: "FAQ", route: "faq" },
        { title: "Sponsors", route: "sponsor-info" },

    ]
    // Maybe name changes? Apply Now --> Apply, Sponsor Info --> Sponsors, 
    // Event Info --> About Us (?) maybe idk use judgement. 
    return (
        <nav className="flex justify-between items-center h-20 p-10">
            <Link href="/" className={`${majorMonoDisplay.variable} font-heading text-white drop-shadow-md`}>
                <Image src="/AstralHacksLogoWhite.png" alt="Logo" width={100} height={100} className="inline-flex" /> </Link>
 
            <ul className={`${raleway.variable} font-text text-5xl flex justify-start gap-6 list-none text-white drop-shadow-md`}>
                {links.map((link) => (
                    <li key={link.title}>
                        <Link href={`/${link.route}`}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
