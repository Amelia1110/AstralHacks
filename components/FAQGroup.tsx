import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import down from "../public/down.svg";
import Head from 'next/head';
import FAQ from '@/pages/faq';
import FAQItem from './FAQItem';
import { Major_Mono_Display, Roboto_Mono } from 'next/font/google';

type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
    data2: Props[]
}

function FAQGroup({ handleClick, isSomeActive, data, data2, turn, setTurn }: LayoutProps): React.JSX.Element {
  return (
    <div className='items-start flex-col grid grid-cols-3 w-full my-8 px-20'>
      {data.map((el, i) => {
        return (
          <div className='w-full' key={"questions" + i}>
            <FAQItem
              question={el.question}
              answer={el.answer}
              turn={turn}
              setTurn={setTurn}
              idx={el.idx} 
              />
          </div>
        );
      })}
    </div>
  );
}

export default FAQGroup