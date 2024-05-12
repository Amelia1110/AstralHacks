import { Major_Mono_Display, Raleway, Roboto_Mono } from 'next/font/google';
import { motion } from 'framer-motion';
import TitleSVG from '../TitleSVG';
import { SlArrowDown } from 'react-icons/sl';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display: 'block',

})

const majorMonoDisplay = Major_Mono_Display({
    subsets: ['latin'],
    variable: '--font-major_mono_display',
    weight: '400',
    display: 'block',
})

export default function LandingPage(ref: any) {
    // Maybe name changes? Apply Now --> Apply, Sponsor Info --> Sponsors, 
    // Event Info --> About Us (?) maybe idk use judgement. 
    return (
        <main id="landing-page" className="h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col pt-[calc(50vh_-_135px)] pb-40 items-center gap-8 ">
                    <TitleSVG/>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ duration: 2.8, delay: 0.9 }}
                     >
                    <p className={`${robotoMono.variable} font-heading font-semibold tracking-wide text-white text-4xl`}>
                        TEMPORARILY POSTPONED | IN PERSON 
                    </p>
                    </motion.div> 
                </div>
                <motion.div className="flex flex-col gap-2 hover:gap-4 transition-all duration-300 w-fit items-center"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 2.5, delay: 1.5 }}
                >
                <p className={`${majorMonoDisplay.variable} font-styled text-center text-white text-xl`}>start your journey</p>
                <SlArrowDown className="text-white text-2xl"/>
                </motion.div>
            </div>
        </main>
    );
}