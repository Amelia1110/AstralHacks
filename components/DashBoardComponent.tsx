import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";


const UserProfile = () => {
    const {data: session }: any = useSession();
    const router = useRouter();
    if (!session){
        signIn()
    }
    
    return (
        <main>
            <div>
                {
                    session &&
                    <>
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
                    </>
                }
                <Link href={"/apply-now"}/>
            </div>
        </main>
    )
}

export default UserProfile