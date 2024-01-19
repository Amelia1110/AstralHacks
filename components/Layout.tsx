import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import down from "../public/down.svg";
import Accordion from './Accordian';
import Head from 'next/head';

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

function Layout({ handleClick, isSomeActive, data, data2, turn, setTurn }: LayoutProps): React.JSX.Element {
  return (
    <div className='items-center flex-col grid  lg:w-7/12 lg:mt-7 w-full my-5 px-4'>
      <span className='text-center text-3xl px-6 py-3 text-white'>
        FAQ
      </span>
      
      <div className='flex justify-auto w-full mb-6 lg:justify-end'>
        <button
        >
          <div
            className={"transition-all ease-in-out duration-200 " +
              (isSomeActive ? " rotate-180" : "rotate-0")}
          >

          </div>
        </button>
      </div>

      {data.map((el, i) => {
        return (
          <div className='w-full' key={"questions" + i}>
            <Accordion
              question={el.question}
              answer={el.answer}
              turn={turn}
              setTurn={setTurn}
              idx={el.idx} />
          </div>
        );
      })}
    </div>
  );
}

export default Layout