import { connectToMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { IUser } from "@/types"
import { hash } from "bcryptjs"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req:NextApiRequest, res : NextApiResponse) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST"){
        if (!req.body) return res.status(400).json({error: "Data is missing"})

        const {fullName,email,password} = req.body
        const p = String(password)

        const userExists = await User.findOne({email})

        if (userExists){
            res.status(409).json({error:"User Already Exists"})
        }

        else{
            if (p.length < 6){
                return res.status(409).json({error:"Password must be at least 6 digits"})
            }
            const hashedPassword = await hash(p,12)

            User.create({
                fullName,
                email,
                password : hashedPassword
            }).then(async(data:IUser) => {

                const user = {
                    email : data.email,
                    fullName : data.fullName,
                    _id : data._id
                }

                return res.status(201).json({
                    success : true,
                    user
                })
            }).catch((error: unknown) => {
                if (error && error instanceof mongoose.Error.ValidationError){
                    for(let field in error.errors){
                        const msg = error.errors[field].message
                        return res.status(409).json({error: msg})
                    }
                }
                // handle other types of errors here
            })
        }
    }
    else{
        res.status(405).json({error: "Method Not Allowed"})
        res.end()
    }

    res.end()
}

export default handler