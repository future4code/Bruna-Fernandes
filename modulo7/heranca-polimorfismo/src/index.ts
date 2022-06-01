import express, { Request, Response } from "express";
import cors from "cors"; 
import { AddressInfo } from "net"; 
import User from "./Classes/user";
import Customer from "./Classes/Customer ";

const app = express();

app.use(express.json()); 
app.use(cors()); 

//Exercícios
//1.a - Não é possível imprimir ela é privada
//1.b - 1 vez

//2.a - 1 vez
//2.b - 1 vez

const user1 = new User ("1","ola@ola", "Cliente1", "1234")
const customer1 = new Customer ("2", "oie@oie", "Cliente2", "123456", "112233")

console.log (user1)
console.log (customer1)





const server = app.listen(process.env.PORT || 3003, () => { 
           if (server) { 
                        const address = server.address() as AddressInfo; 
                        console.log(`Server is running in http://localhost: ${address.port}`); 
            } else { 
                         console.error(`Failure upon starting server.`);
 }
 });