import connection from "../connection"
import { Request, Response } from "express";



export const selectPurchases =async (req:Request, res:Response):Promise<void>=> {
    try {
    
       const user = await connection("labecommerce_purchases")
       .select("labecommerce_users.name as usuário", "labecommerce_users.email","labecommerce_products.name as protuto","labecommerce_products.price","labecommerce_products.image_url","labecommerce_purchases.quantity")
       .innerJoin("labecommerce_products", "labecommerce_products.id","labecommerce_purchases.product_id")
       .innerJoin("labecommerce_users", "labecommerce_users.id","labecommerce_purchases.user_id")
        res.status(201).send(user)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
} 