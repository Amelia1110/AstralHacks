import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import minus from "../public/minus.svg";
import plus from "../public/plus.svg";
import { Roboto_Mono } from 'next/font/google';

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

const FAQItem = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='flex grid-flow-col rounded content-start items-start justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`bg-black opacity-45 px-5 rounded shadow border border-white cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className='py-3'>
           <div className='grid-flow-col flex items-center justify-between h-16 text-left'>
              <span className={`${robotoMono.variable} font-text mx-2 font-medium lg:font-semibold lg:text-xl text-sm text-white`}>{question}</span>
              <div>
               { turn![idx] ? <Image src={minus} alt="minus" width={30} height={30}/> :
                <Image src={plus} alt="plus" width={20} height={20}/>}
              </div>
           </div>
           <div ref={contentRef} className={`${robotoMono.variable} font-text mx-4 overflow-hidden text-left text-white transition-all duration-500 h-full`}>
              <p className={`${robotoMono.variable} font-text py-6 border-white font-light tracking-tight text-justify whitespace-pre-line text-xs lg:text-lg`}>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default FAQItem