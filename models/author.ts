export class Author {
    static nextId = 1;  
    firstName: string;
    lastName: string;
    id: number;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = Author.nextId++;
    }


}