import { useState } from "react"
import minus from "../public/minus.svg"
import plus from "../public/plus.svg"

type QAProps = {
    question: string,
    answer: string,
}

const QA = (props: QAProps) => {
    const [showQA, setShowQA] = useState(false);

    return (
        <div className=" bg-cyan-800 pb-2 py-5 px-3 my-4 max-w-2xl mx-auto border rounded-lg flex flex-col gap-6">
            <button className = "bg-cyan-800 pb-2 flex flex-row items-center justify-between gap-4 font-medium"

                onClick={() => setShowQA(!showQA)}
            >
                <span className="text-white text-xl">{props.question}</span>
                <span className="text-white text-lg">
                    {showQA ? "-" : "+"}
                </span>
            </button>
            {showQA &&
                <p className="border-t text-white border-white pb-0 py-2 text-lg">{props.answer}</p>
            }
        </div>
    )
}

export default QA