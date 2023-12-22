"use client";

import {Body,H1} from "./design-system/formatting"
import QA from "./QA";

const dataQA = [
    {
        question: "hello?",
        answer: "meow!",
    },
    {
        question: "Goodmornign",
        answer: "Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well. Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it to actually write it down?",
    },
    {
        question: "cheese?",
        answer: "milk",
    },
    {
        question: "hello",
        answer: "goodbye",
    },
]

const FAQ = () => {
    return (
        <Body>
            <H1>FAQ</H1>
            {dataQA.map((data, i,) =>
                <div key={i}>
                    <QA
                        question={data.question}
                        answer={data.answer}
                    />
                </div>
            )}
        </Body>
    )
}

export default FAQ