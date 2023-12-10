import axios from 'axios';
import { log } from 'console';
import { Major_Mono_Display } from 'next/font/google';
import LoginForm from '@/components/Form/LoginForm';


const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

type Props =  {}


const ApplyNow = (props : Props) => {
    return(
        <LoginForm/>
    )
}

export default ApplyNow