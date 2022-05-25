import express, { Express, Request, Response } from "express";
import cors from "cors"; 
import { AddressInfo } from "net"; 
import { Transaction } from "./types";

const app: Express = express(); 
app.use(express.json()); 
app.use(cors()); 

//respostas
//1-a. O construtor serve para receber parametros de criação
//1-b
// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
//   }

//1-c. Acessamos usando this 


const server = app.listen(process.env.PORT || 3003, () => { 
    if (server) { 
        const address = server.address() as AddressInfo; 
            console.log(`Server is running in http://localhost: ${address.port}`); 
    } else { 
        console.error(`Failure upon starting server.`);
 }
 });
