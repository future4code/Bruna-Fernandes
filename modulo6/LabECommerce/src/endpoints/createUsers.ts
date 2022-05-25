import { Request, Response } from "express";
import { uuid } from "uuidv4";
import connection from "../connection";
import { User } from "../types";

export const creatUser =async (req:Request, res:Response) => {
    try {
        const {name, email, password} = req.body
        if (!name || !email || !password){
            throw new Error("Complete o que falta!");
        }

        const newUser: User ={
            id:uuid(), 
            name,
            email, 
            password
        }

        await connection("labecommerce_users").insert(newUser) 
        res.status(201).send("Usuário Criado")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}