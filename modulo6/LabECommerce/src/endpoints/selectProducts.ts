import connection from "../connection"
import { Request, Response } from "express";



export const selectProducts =async (req:Request, res:Response):Promise<void>=> {
    try {
    
       const user = await connection("labecommerce_products").select()
        res.status(201).send(user[0])
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
} 