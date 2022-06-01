import express, { Express, Request, Response } from "express";
import cors from "cors"; 
import { AddressInfo } from "net"; 
import { UserAccount } from "./UserAccount";
import { Transaction } from "./transactions";
import { Bank } from "./bank";


const app: Express = express(); 
app.use(express.json()); 
app.use(cors()); 

//respostas
//1-a. O construtor serve para receber parametros de criação
//1-b - 1 vez
//1-c. Acessamos usando this 


const user1 = new UserAccount ("123.456", "Bruna",35)
// console.log (user1.getCpf())

const transaction1 = new Transaction ("PIX", 300, "20/02/22")
// console.log (transaction1.getDescription)
// console.log (transaction1.getDate)  
// console.log (transaction1.getValue)  

const bank1 = new Bank (user1, transaction1)



const server = app.listen(process.env.PORT || 3003, () => { 
    if (server) { 
        const address = server.address() as AddressInfo; 
            console.log(`Server is running in http://localhost: ${address.port}`); 
    } else { 
        console.error(`Failure upon starting server.`);
 }
 });

 