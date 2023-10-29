import { link, linkSync } from "fs";

export default function Navbar () {
    const links = ["Apply Now", "Event Info", "FAQ", "Sponsors"]
// Maybe name changes? Apply Now --> Apply, Sponsor Info --> Sponsors, 
// Event Info --> About Us (?) maybe idk use judgement. 
    return (
    <nav className= "bg-transparent flex justify-between items-center h-20 p-4">
        {/* Logo */}
        <p className="text-white ml-4 font-sans drop-shadow-lg">Astral Hacks </p>
        <ul className="flex justify-start gap-6 list-none text-gray-200"> 
            {links.map((link) => (
                <li key={link}>
                    <a href="#"> {link}</a>
                </li>
            ))}

        </ul>
    </nav>
    );
}
