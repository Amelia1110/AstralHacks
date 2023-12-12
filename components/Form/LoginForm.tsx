import { loginUser } from "@/helpers";
import { AxiosError } from "axios";
import Link from "next/link";
import NavLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";




const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const router = useRouter()

    function redirectToSignup(){
      router.push("/signup")
  }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      // Your login logic here
      try{
        setLoading(true)
        const loginRes = await loginUser({email, password})
        console.log(loginRes)

        if (loginRes && !loginRes.ok){
          setSubmitError(loginRes.error || "")
        }
        else{
          router.push("/dashboard")
        } 
      } catch (error){
        if (error instanceof AxiosError){
            const errorMsg = error.response?.data?.error
            setSubmitError(errorMsg)
        }
      }

      setLoading(false)

    };
    
   
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8">
           <div>
             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
               Sign in to your account
             </h2>
           </div>
           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
             <div className="rounded-md shadow-sm -space-y-px">
               <div>
                 <label htmlFor="email-address" className="sr-only">
                   Email address
                 </label>
                 <input
                   id="email-address"
                   name="email"
                   type="email"
                   autoComplete="email"
                   required
                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Email address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
               </div>
               <div>
                 <label htmlFor="password" className="sr-only">
                   Password
                 </label>
                 <input
                   id="password"
                   name="password"
                   type="password"
                   autoComplete="current-password"
                   required
                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                 />
               </div>
             </div>
            <div className="flex flex-auto justify-between">
                <div>
                    <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
                    disabled = {loading}
                    >Login</button>
                </div>
                {<div className='pt-2 text-red-700'>{submitError}</div>}

                <div>
                    <button type="button" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center" onClick={redirectToSignup}>
                    New User? Sign Up!
                    </button>
                </div>
            </div>
                 </form>
                 </div>
                 </div>

                 )}

export default LoginForm