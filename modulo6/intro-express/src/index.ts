import express, {Request, Response } from "express";
import cors from "cors"
import {users, users} from "./data"


const app = express()

app.use (express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    console.log("Estamos onn!")
    
    res.status(201).send("Transmitindo")
})

app.get ("/users",  (req: Request, res: Response) =>{
    const users: string = users.map(user => user.id)
    Response.status(200)
}

   app.listen (3003, () =>{
    console.log ("Servidor OK")
})