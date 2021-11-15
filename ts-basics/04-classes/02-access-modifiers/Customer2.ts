class Customer2 {

    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
}

let customer2: Customer2 = new Customer2('Patrick', 'Bateman');

customer2.firstName = 'Jason';

console.log(`Hello, ${customer2.firstName} ${customer2.lastName}!`);