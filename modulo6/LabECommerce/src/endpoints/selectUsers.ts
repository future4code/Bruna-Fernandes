import connection from "../connection"
import { Request, Response } from "express";



export const selectUsers =async (req:Request, res:Response):Promise<void>=> {
    try {
    
       const user = await connection("labecommerce_users")
       .select("labecommerce_users.name as usuário", "labecommerce_users.email","labecommerce_products.name as protuto","labecommerce_products.price","labecommerce_products.image_url","labecommerce_purchases.quantity")
       .innerJoin("labecommerce_purchases", "labecommerce_purchases.user_id","labecommerce_users.id",)
       .innerJoin("labecommerce_products", "labecommerce_purchases.product_id", "labecommerce_products.id")
        res.status(201).send(user)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
} 