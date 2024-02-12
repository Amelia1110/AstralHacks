import { connectToMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { IUser } from "@/types"
import axios from "axios"
import { hash } from "bcryptjs"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req:NextApiRequest, res : NextApiResponse) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST"){
        if (!req.body) return res.status(400).json({error: "Data is missing"})

        const {email,answerOne,answerTwo,answerThree} = req.body


        const userExists = await User.findOne({email})

        if (userExists){
           //console.log(userExists) 
           //console.log(answerOne)
           const result = await User.updateOne({"email" : email}, {$set: {"answerOne" : answerOne, "answerTwo" : answerTwo, "answerThree" : answerThree}})

           //console.log(result)
           res.status(200).json({success:true})
        }

        else{
            res.status(409).json({error:"User Does Not Exist"})
        }
    }
    else{
        res.status(405).json({error: "Method Not Allowed"})
        res.end()
    }

    res.end()
}

export default handler