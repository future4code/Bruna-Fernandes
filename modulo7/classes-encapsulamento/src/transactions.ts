export class Transaction {
    constructor(
        private description: string,
        private  value: number,
        private  date: string) {
            this.description = description
            this.value = value
            this.date = date
    
    }

    
    public getDescription = () => console.log (this.description)
    public getValue = () => console.log (this.value)
    public getDate = () => console.log (this.date)
} 