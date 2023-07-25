export class Account {
    private balance: number

    constructor(){
        this.balance = 0
    }

    deposit(amount: number): boolean {
        if(amount < 0) return false
        
        this.balance += amount
        return true
    }

    getBalance(): number {
        return this.balance
    }
}