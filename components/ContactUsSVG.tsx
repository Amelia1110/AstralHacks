import { Major_Mono_Display, Raleway } from 'next/font/google';
import Image from 'next/image';

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: [
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  })
export default function ContactUsFooter(){
    return(
        <main>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=astralhacks.info@gmail.com">
          <div className="flex justify-center pt-2">
            
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="0.7" 
            stroke="white"
            className="w-6 h-6">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
            />
            </svg>
            <p className={`${raleway.variable} font-text text-center font-thin text-white text-xl`}>astralhacks.info@gmail.com</p>
            </div>
            </a>
        </main>
    )
}