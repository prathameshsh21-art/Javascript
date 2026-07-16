# JavaScript ES6 Classes

This project demonstrates the use of ES6 Classes in JavaScript.

## Concepts Covered

- ES6 Classes
- Constructor
- Object Creation
- Methods
- Date Object
- Template Literals

## Code Example

```javascript
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
```

## Output

```
===== ES6 Classes =====

Person {
  firstName: 'Prathamesh',
  lastName: 'Kumbar',
  dob: 2005-08-21T00:00:00.000Z
}

Person {
  firstName: 'John',
  lastName: 'Doe',
  dob: 1998-03-15T00:00:00.000Z
}

Full Name: Prathamesh Kumbar
Birth Year: 2005

Full Name: John Doe
Birth Year: 1998
```

## Author

Prathamesh Kumbar
