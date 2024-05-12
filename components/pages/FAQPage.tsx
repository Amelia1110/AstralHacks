import Head from 'next/head'
import { Inter, Roboto_Mono } from 'next/font/google'
import { useState } from 'react'
import data from "@/public/data.json"
import { Layout } from 'antd'
import FAQGroup from '@/components/FAQGroup'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    display : 'block',

})

export default function FAQPage() {
    const [active, setActive] = useState([false, false, false, false, false]);
    const isSomeActive = active.some((element) => element);
    const handleClick = () => {
      isSomeActive
        ? setActive([false, false, false, false, false])
        : setActive([true, true, true, true, true, true]);
    };

    return (
        <main id="faq-page" className="py-10">
            <div className='flex w-full justify-center items-center'>
                <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>QUESTIONS?</h1>
            </div>
            <div className='grid row-start-1 place-items-center w-full mb-2'>
                <FAQGroup
                handleClick={handleClick}
                isSomeActive={isSomeActive}
                data={data}
                turn={active}
                setTurn={setActive} data2={[]}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <p className={`${robotoMono.variable} font-text text-white text-2xl text-center`}> Any Other Questions? </p>
                <div className="bg-white hover:bg-black opacity-45 border rounded-lg shadow-md border-white py-2.5 px-8 text-black hover:text-white">
                    <Link href="https://mail.google.com/mail/?view=cm&to=astralhacks.info@gmail.com" target="_blank" className="flex gap-3 items-center">
                        <p className={`${robotoMono.variable} font-text `}>Contact Us!</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}