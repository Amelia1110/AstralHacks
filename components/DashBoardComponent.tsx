import { useSession, signOut } from "next-auth/react";


const UserProfile = () => {
    const {data: session }: any = useSession();
    return (
        <main>
            <div>
                {
                    session &&
                    <>

                        <div>
                            {
                                `Hello ${session?.user?.fullName}`
                            }
                        </div>
                        <div>
                            {session?.user?.email}
                        </div>

                        <button
                            title="Logout"
                            onClick={() => signOut()}
                        />
                    </>
                }
            </div>
        </main>
    )
}

export default UserProfile