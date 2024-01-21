import DashBoardComponent from "@/components/DashBoardComponent"
import TitleSVG from "@/components/TitleSVG"
import { useSession } from "next-auth/react"

const Dashboard = () => {
    const {data: session} : any  = useSession()
    console.log(session, "in profile comp")
    
return(
    <div>
    <div className="mt-6 text-center text-7xl font-extrabold text-white">Dash Board</div>
    <DashBoardComponent/>
    </div>
)
}

export default Dashboard