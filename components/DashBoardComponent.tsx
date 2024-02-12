import { connectToMongoDB } from "@/lib/mongodb";
import axios from "axios";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";


const UserProfile = () => {
    const {data: session, update}: any = useSession();
    const router = useRouter();


    const [answerData, setAnswerData] = useState({
        email: session?.user?.email,
        answerOne : session?.user?.answerOne as string,
        answerTwo : session?.user?.answerTwo as string,
        answerThree : session?.user?.answerThree as string,
    });
    //console.log(session)


    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswerData({ ...answerData, [e.target.name]: e.target.value });
        //console.log(answerData)
     };

    
    const saveAnswer =  async () => {
        //console.log(answerData)
        await axios.post("http://localhost:3000/api/saveAnswer", answerData)

        await update({
            ...session,
            user:{
                ...session?.user,
                answerOne : answerData.answerOne,
                answerTwo : answerData.answerTwo,
                answerThree : answerData.answerThree
            }
        })

        //console.log(session)

    } 

    if (!session){
        signIn()
    }
    
    

    return (
        <main>
            <div>
                {
                    session &&
                    <>
                    <div className="mx-8">
                        <div>
                            <div className="text-white">
                                {
                                    `Hello ${session?.user?.fullName}`
                                }
                            </div>
                            <div className="text-white">
                                {session?.user?.email}
                            </div>

                            <button
                                title="Logout"
                                onClick={() => signOut({callbackUrl:"/"})}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
                            >
                                Log Out
                            </button>
                        </div>

                        <form className="mt-10 space-y-6 grid grid-flow-row">
                            <div>
                            <label className="mt-6 text-lg font-extrabold text-white text-wrap block" htmlFor="questionOne">
                                Question 1: Briefly describe your greatest strengths as a hacker (about 100 words)
                            </label>

                                <textarea 
                                id="questionOne" 
                                //defaultValue={session?.user?.answerOne} 
                                rows={10}
                                className="text-black font-normal resize-none w-full"
                                name="answerOne"
                                value={answerData.answerOne}
                                onChange={handleInputChange}

                                >

                                </textarea>
                            </div>

                            <div>
                            <label className="mt-10 text-lg font-extrabold text-white text-wrap block" htmlFor="questionTwo">
                                Question 2: What is a project you’ve created that you’re proud of, and why does it resonate with you? This does not have to be related to tech, and can be school-related or extracurricular – whatever you think deserves your highest praise! (about 150 words)
                            </label>
                                <textarea 
                                id="questionTwo" 
                                rows={10}  
                                //defaultValue={session?.user?.answerTwo} 
                                className="text-black font-normal resize-none w-full"
                                name="answerTwo"
                                value={answerData.answerTwo}
                                onChange={handleInputChange}
                                >

                                </textarea>
                            </div>
                            
                            <div>
                            <label className="mt-6 text-lg font-extrabold text-white text-wrap block" htmlFor="questionThree">
                                Question 3:What marshmallow from lucky charms is your favourite? (optional)
                            </label>

                                <textarea 
                                id="questionThree" 
                                rows={10}
                                //defaultValue={session?.user?.answerThree} 
                                className="text-black font-normal resize-none w-full"
                                name="answerThree"
                                value={answerData.answerThree}
                                onChange={handleInputChange}
                                >

                                </textarea>
                            </div>

                            <div>
                                <button 
                                type="button"
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
                                onClick={saveAnswer}
                                >
                                    Save Answer
                                </button>
                            </div>
                        </form>

                        
                        </div>
                    </>
                }
                <Link href={"/apply-now"}/>
            </div>
        </main>
    )
}

export default UserProfile