import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { compare } from "bcryptjs";
import { IUser } from "@/types";



const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            credentials:{
                email:{label: "Email", type: "text"},
                password:{label: "Password", type:"password"}
            },
            async authorize(credentials){
                await connectToMongoDB().catch(error => {throw new Error(error)})

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user){
                    throw new Error("Invalid Credentials")
                }

                

                const isPasswordCorrect= await compare(credentials!.password, user.password)

                if (!isPasswordCorrect){
                    throw new Error(`Invalid Credential`)
                }

                return user
            }
        })
    ],

    pages : {
        signIn : "/apply-now"
    },

    session:{
        strategy : "jwt"
    },
    callbacks:{
        jwt: async ({token, user, trigger, session}) => {
            user && (token.user = user)

            if (trigger === "update"){
                console.log("updating")
                console.log(session)
                return session
            }
            return token
        },
        session: async({session,token}) => {
            const user = token.user as IUser
            session.user = user
            //console.log(session)
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(options)