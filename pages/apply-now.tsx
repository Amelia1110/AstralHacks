import { log } from 'console';
import { Major_Mono_Display, Roboto_Mono } from 'next/font/google';
import LoginForm from '@/components/Form/LoginForm';
import { useSession } from 'next-auth/react';
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display : 'block',

})

type Props =  {}

/*
const ApplyNow = (props : Props) => {
    const {data: session }: any = useSession();
    const router = useRouter()

    useEffect(() =>{
      if (session){
        router.push('/dashboard')
      }
    })
    

    return(
      <div className="pt-20 w-full h-full">
        <div className='flex w-full justify-center items-center'>
          <h1 className={`${robotoMono.variable} font-heading text-white text-medium text-7xl text-right `}>START YOUR APPLICATION</h1>
        </div>
        <LoginForm/>
      </div>
       
    )
}

export default ApplyNow
*/