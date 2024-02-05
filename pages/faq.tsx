import Head from 'next/head'
import { Inter, Roboto_Mono } from 'next/font/google'
import { useState } from 'react'
import data from "../public/data.json"
import { Layout } from 'antd'
import FAQGroup from '@/components/FAQGroup'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export default function FAQ() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <div className="pt-20 w-full h-full">
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
        <a href="/contactus" className="w-48 pb-8">
          <p className={`${robotoMono.variable} font-text text-center text-white bg-teal-800 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-teal-800 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-blue-800`}> Contact Us!</p>
        </a>
      </div>
    </div>
  )
}
