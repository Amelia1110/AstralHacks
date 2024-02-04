import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import data from "../public/data.json"
import { Layout } from 'antd'
import FAQPage from '@/components/FAQ'
const inter = Inter({ subsets: ['latin'] })


export default function FAQ() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <div>
    <div className='grid row-start-1 place-items-center w-full'>
      <FAQPage
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={data}
          turn={active}
          setTurn={setActive} data2={[]}
          />
    </div>
    <p className='text-white text-2xl text-center'> More Questions? </p>
    <a href="/contactus">
          <div className="py-5 flex justify-center gap-2 pt-2">
          
            <p className='font-text text-center text-white bg-teal-800 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-800 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-blue-800'> Contact Us!</p>
            </div>
            </a>

    </div>
  )
}
