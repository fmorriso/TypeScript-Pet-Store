import {Role} from "./role_type";

export class Person {

    #firstName: string;
    #lastName: string;
    #role: Role;

    constructor(firstName: string, lastName: string, role: Role) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#role = role;
    }

    public get firstName() : string { return this.#firstName;}
    public get lastName() : string { return this.#lastName;}
    public get role(): string { return this.#role;}
    public get fullName(): string { return `${(this.#firstName)} ${(this.#lastName)}` ; }

    public toString(): string { return `firstName: '${this.#firstName}', lastName: '${this.#lastName}', role: '${this.#role}'`}
}
