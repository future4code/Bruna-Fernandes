import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../connection";
import { Product } from "../types";

export const creatProduct =async (req:Request, res:Response) => {
    try {
        const {name, price, image_url} = req.body
        if (!name || !price || !image_url){
            throw new Error("Complete o que falta!");
        }

        const newProduct: Product ={
            id:uuid(), 
            name,
            price, 
            image_url
        }

        await connection("labecommerce_products").insert(newProduct) 
        res.status(201).send("Produto inserido")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}