// ES6 Class Example

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Creating Objects
const person1 = new Person("Prathamesh", "Kumbar", "2005-08-21");
const person2 = new Person("John", "Doe", "1998-03-15");

// Console Output
console.log("===== ES6 Classes =====");

console.log(person1);
console.log(person2);

console.log("Full Name:", person1.getFullName());
console.log("Birth Year:", person1.getBirthYear());

console.log("Full Name:", person2.getFullName());
console.log("Birth Year:", person2.getBirthYear());
