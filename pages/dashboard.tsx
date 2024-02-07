import DashBoardComponent from "@/components/DashBoardComponent"
import TitleSVG from "@/components/TitleSVG"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Dashboard = () => {
    const {data: session} : any  = useSession()
    //console.log(session, "in profile comp")
    const router = useRouter()
    
    useEffect(() =>{
        if (!session){
            router.push('/apply-now')
        }
    })

return(
    <div>
    <div className="mt-6 text-center text-7xl font-extrabold text-white">Dash Board</div>
    {
    session &&
    <DashBoardComponent/>
    }
   
    </div>
    

)
}

export default Dashboard