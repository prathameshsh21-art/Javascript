// ===========================================
// JavaScript Practice - Day 2
// Topics Covered:
// Variables, Arrays, Objects, Loops,
// forEach(), map(), filter(),
// Comparison Operators, if-else
// ===========================================

// Array of Objects
const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];

console.log("All Todos:");
console.log(todos);

console.log("\nSecond Todo:");
console.log(todos[1].text);

// -------------------------------------------
// For Loop
// -------------------------------------------
console.log("\nFor Loop:");

for (let i = 1; i <= 5; i++) {
    console.log(`For Loop Number: ${i}`);
}

// -------------------------------------------
// While Loop
// -------------------------------------------
console.log("\nWhile Loop:");

let i = 1;

while (i <= 5) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// -------------------------------------------
// for...of Loop
// -------------------------------------------
console.log("\nfor...of Loop:");

for (let todo of todos) {
    console.log(todo.text);
}

// -------------------------------------------
// forEach()
// -------------------------------------------
console.log("\nforEach():");

todos.forEach(function(todo) {
    console.log(todo.text);
});

// -------------------------------------------
// map()
// -------------------------------------------
console.log("\nmap():");

const todoTexts = todos.map(function(todo) {
    return todo.text;
});

console.log(todoTexts);

// -------------------------------------------
// filter()
// -------------------------------------------
console.log("\nfilter():");

const completedTodos = todos.filter(function(todo) {
    return todo.isCompleted;
});

console.log(completedTodos);

// -------------------------------------------
// filter() + map()
// -------------------------------------------
console.log("\nfilter() + map():");

const completedTodoTexts = todos
    .filter(function(todo) {
        return todo.isCompleted;
    })
    .map(function(todo) {
        return todo.text;
    });

console.log(completedTodoTexts);

// -------------------------------------------
// Comparison Operators
// -------------------------------------------
console.log("\nComparison Operators:");

let x = "10";

console.log(x == 10);   // true
console.log(x === 10);  // false

// -------------------------------------------
// if...else if...else
// -------------------------------------------
console.log("\nif...else:");

const a = 4;
const b = 10;

if (a > b) {
    console.log("a is greater");
} else if (b > a) {
    console.log("b is greater");
} else {
    console.log("Both are equal");
}

console.log("\nJavaScript Practice Completed!");
