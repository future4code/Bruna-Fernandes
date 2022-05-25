import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../connection";
import { Purchases } from "../types";

export const creatPurchase =async (req:Request, res:Response) => {
    try {
        const {user_id, product_id, quantity, total_price} = req.body
        if (!user_id){
            throw new Error("Conecte-se");
        }
        const [product] = await connection("labecommerce_products").select().where({id:product_id})

        const totalPrice = product.price *quantity

        const newPurchase: Purchases ={
            id:uuid(), 
            user_id,
            product_id, 
            quantity,
            total_price:totalPrice
        }

        await connection("labecommerce_purchases").insert(newPurchase) 
        res.status(201).send("Compra finalizada")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}