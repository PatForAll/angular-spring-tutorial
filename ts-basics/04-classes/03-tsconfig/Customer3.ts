class Customer3 {

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

let customer3: Customer3 = new Customer3('Patrick', 'Bateman');

customer3.firstName = 'Jason';

console.log(`Hello, ${customer3.firstName} ${customer3.lastName}!`);