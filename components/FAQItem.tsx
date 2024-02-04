import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import minus from "../public/minus.svg";
import plus from "../public/plus.svg";

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

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
    <div className='flex grid-flow-col rounded items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`bg-teal-800 px-5 rounded shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className='py-3'>
           <div className='grid-flow-col flex items-center justify-between h-14 text-left'>
              <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-white'>{question}</span>
              <div>
               { turn![idx] ? <Image src={minus} alt="" width={20} height={20}/> :
                <Image src={plus} alt="" width={20} height={20}/>}

              </div>
           </div>
           <div ref={contentRef} className='mx-4 overflow-hidden text-left text-white transition-all duration-500 h-full'>
              <p className='py-1 border-white font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default FAQItem