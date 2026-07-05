// =======================================
// JavaScript Basics Demo
// Created by: Prathamesh Kumbhar
// =======================================

// Variables and Data Types

const name = "Prathamesh";
const age = 21;
const rating = 4.5;
const isStudent = true;
const x = null;
const y = undefined;
let z;

console.log("===== DATA TYPES =====");
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// String Operations

console.log("\n===== STRING METHODS =====");

console.log("My name is " + name + " and I am " + age + " years old.");

console.log(`My name is ${name} and I am ${age} years old.`);

console.log("Length:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Substring:", name.substring(0, 5));
console.log("Split:", name.split(""));

// Arrays

console.log("\n===== ARRAYS =====");

const fruits = ["Apple", "Orange", "Mango"];

fruits.push("Banana");
fruits.unshift("Strawberry");

console.log(fruits);
console.log("First Fruit:", fruits[0]);
console.log("Array?", Array.isArray(fruits));
console.log("Index of Mango:", fruits.indexOf("Mango"));

// Objects

console.log("\n===== OBJECTS =====");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["Music", "Movies", "Sports"],
    address: {
        city: "Boston",
        state: "MA"
    }
};

person.email = "john@example.com";

console.log(person);

console.log("Name:", person.firstName, person.lastName);
console.log("Age:", person.age);
console.log("Second Hobby:", person.hobbies[1]);
console.log("City:", person.address.city);

// Object Destructuring

const {
    firstName,
    lastName,
    address: { city }
} = person;

console.log("\n===== DESTRUCTURING =====");
console.log(firstName);
console.log(lastName);
console.log(city);
