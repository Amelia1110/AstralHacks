import axios from 'axios';
import { log } from 'console';
import { Major_Mono_Display } from 'next/font/google';

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  variable: '--font-major_mono_display',
  weight: '400'
})

async function getAccessToken(){
    var hash  = window.location.hash
    var result = hash.split('&')
    console.log(result[0].split('=')[1])
}      


export default function ApplyNow() {
    function loginMLH(){
        const applicationID =  "HfrPkUEg-HOkYSRDwKQ6KJKUprFxPPmbh5rkrmmON8c"
        const secret = "yGAk6uQtS41g-5cvEwvJis5C5JIIiTUGwbSgPRZzg9U"
        const reURL = "http%3A%2F%2Flocalhost%3A3000%2Fapply-now"
        window.location.href =`https://my.mlh.io/oauth/authorize?client_id=${applicationID}&redirect_uri=${reURL}&response_type=token&scope=email+demographics+education+phone_number+birthday`    

    }


    
    return (
        <main className="grid place-content-center">
            <h1 onClick={getAccessToken} className={`${majorMonoDisplay.variable} font-heading text-white text-6xl`}>Apply now</h1>
            <button className= {`${majorMonoDisplay.variable} font-heading text-white text-6xl`} onClick={loginMLH}>Login with MLH</button>
            
        </main>
    )
}