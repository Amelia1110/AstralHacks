import { log } from 'console';
import { Major_Mono_Display } from 'next/font/google';
import LoginForm from '@/components/Form/LoginForm';
import { useSession } from 'next-auth/react';
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';


const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

type Props =  {}


const ApplyNow = (props : Props) => {
    const {data: session }: any = useSession();
    const router = useRouter()

    useEffect(() =>{
      if (session){
        router.push('/dashboard')
      }
    })
    

    return(
        <LoginForm/>
    )
}

export default ApplyNow