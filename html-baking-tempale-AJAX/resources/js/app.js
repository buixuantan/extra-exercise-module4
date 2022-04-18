class Customer {
    constructor(id, fullName, phone, email, address, balance) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
        this.address = balance;
    }
}

class Deposit {
    constructor(customerId, transactionAmount) {
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }

}

class Withdraw {
    constructor(customerId, transactionAmount) {
        this.customerId = customerId;
        this.transactionAmount = transactionAmount;
    }
}