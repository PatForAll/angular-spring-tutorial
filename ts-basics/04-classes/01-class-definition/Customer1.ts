class Customer1 {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer1 = new Customer1('Patrick', 'Bateman');

console.log(`Hello, ${customer1.firstName} ${customer1.lastName}!`);