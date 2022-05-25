import connection from "../connection"
import { Request, Response } from "express";



export const selectUserId =async (req:Request, res:Response):Promise<void>=> {
    try {
        const {id} = req.params       
       const user = await connection("labecommerce_users").select()
           .where({id:id})
        res.status(201).send(user[0])
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
} 