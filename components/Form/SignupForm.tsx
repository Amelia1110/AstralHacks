import { loginUser } from '@/helpers';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';




const SignUpForm = () => {
 const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const [errorMsg, setErrorMsg] = useState('')
 const [submitError, setSubmitError] = useState<string>("")
 const [loading, setLoading] = useState(false)
 const router = useRouter()
 const validateData = ():boolean => {
    
    if (formData.password.length < 6) {
      setErrorMsg("*Password is too short (< 6 digits)");
      
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("*Password is not the same as confirm password");
      return false;
    }

    else{
        setErrorMsg("")
        return true;
    }
 };



 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const isValid = validateData();
    
    if (isValid){
      try{
        setLoading(true)
        const apiRes = await axios.post("http://localhost:3000/api/auth/signup", formData)
        
        if (apiRes?.data?.success){
          // save data in session

          const loginRes = await loginUser({
            email: formData.email,
            password : formData.password,
          })

          if (loginRes && !loginRes.ok){
            setSubmitError(loginRes.error || "")
          }

          
          router.push("/")
          
        }

      }catch(error:unknown){
          if (error instanceof AxiosError){
            const errorMsg = error.response?.data?.error
            setSubmitError(errorMsg) 
          }
      }

      setLoading(false)
    }
    
    
 };

 

 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create New Account
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
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="full-name" className="sr-only">
            Full name
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="given-name"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleInputChange}
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
            autoComplete="new-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled = {loading}
        >
          Sign up
        </button>
        
        {errorMsg && <div className='pt-2 text-red-700'>{errorMsg}</div>}
        {submitError && <div className='pt-2 text-red-700'> {submitError} </div>}
      </div>
    </form>
    </div>
    </div>
 );
};

export default SignUpForm;