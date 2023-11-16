import { Major_Mono_Display } from 'next/font/google';
import Link from 'next/link';

const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    variable: '--font-major_mono_display',
    weight: '400'
})

export default function Navbar () {
    const links = [
        { title: "Apply Now", route: "apply-now" }, 
        { title: "Event Info", route: "event-info" },
        { title: "FAQ", route: "faq" },
        { title: "Sponsors", route: "sponsor-info" },
    ]
// Maybe name changes? Apply Now --> Apply, Sponsor Info --> Sponsors, 
// Event Info --> About Us (?) maybe idk use judgement. 
    return (
    <nav className= "flex justify-between items-center h-20 p-10">
        {/* Logo Placeholder*/} <Link href="/" className="text-white font-sans drop-shadow-md">Astral Hacks </Link>
        <ul className={`flex justify-start gap-6 list-none text-white drop-shadow-md`}> 
            {links.map((link) => (
                <li key={link.title}>
                    <Link href={`/${link.route}`}>{link.title}</Link>
                </li>
            ))}
        </ul>
    </nav>
    );
}
