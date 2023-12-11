import { connectToMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { IUser } from "@/types"
import { hash } from "bcryptjs"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

connectToMongoDB();

export default async function handler(req: { method: string; body: { email: any; password: any } }, res: { status: (arg0: number) => { (): any; new(): any; end: { (): any; new(): any }; json: { (arg0: { message: string }): void; new(): any } } }) {
  if (req.method !== 'POST') {
    return res.status(405).end(); 
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
