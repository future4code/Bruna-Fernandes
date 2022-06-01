import { Transaction } from "./transactions";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

      public getCpf = () => console.log ( this.cpf)
      public getName = () => console.log ( this.name)
      public getAge = () => console.log ( this.age)
      public getBalance = () => console.log ( this.balance)
      public getTransactions = () => console.log ( this.transactions)
   }



