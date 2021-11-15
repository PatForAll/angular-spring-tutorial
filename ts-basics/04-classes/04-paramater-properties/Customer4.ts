class Customer4 {

    constructor(private _firstName: string, private _lastName: string) {
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

let customer4: Customer4 = new Customer4('Patrick', 'Bateman');

customer4.firstName = 'Jason';

console.log(`Hello, ${customer4.firstName} ${customer4.lastName}!`);