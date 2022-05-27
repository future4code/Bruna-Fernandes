import { UserAccount } from "./UserAccount";
import { Transaction } from "./transactions";


export class Bank {
    private accounts: UserAccount[];
    private transactions: Transaction[];
  
    constructor(accounts: UserAccount[], transactions: Transaction[]) {
      this.accounts = accounts;
      this.transactions= transactions
    }
    public getaccounts = () => console.log (this.accounts)
    public getTransactions = () => console.log ( this.transactions)
  }