"use strict";
// Problem: Write a TypeScript function that takes in two numbers as parameters, both of type number, and returns their sum.
const addNumbers = (firstNum, secondNum) => {
    return firstNum + secondNum;
};
// Problem: Write a TypeScript function that takes in a string as a parameter, of type string, and returns the length of the string.
const stringLength = (word) => {
    return word.length;
};
// Problem: Write a TypeScript function that takes in an array of numbers as a parameter, of type number[], and returns the sum of all the numbers in the array.
const sumOfNumberArray = (array) => {
    return array.reduce((accum, curr) => curr + accum, 0);
};
const printPersonsInfo = (person) => {
    return `Person is: ${person.age},${person.email},${person.name},`;
};
const getShapeDetails = (shape) => {
    if ("height" in shape) {
        return `This is a ${shape.name}, with a height and width of ${shape.height}x${shape.width}`;
    }
    else {
        return `This is a ${shape.name}, with a radius of ${shape.radius}x`;
    }
};
const newShape = { name: "long rectangle", height: 12, width: 2 };
getShapeDetails(newShape);
// Problem: Write a TypeScript function that takes in a number as a parameter and checks if it is a prime number. The function should return true if the number is prime, and false otherwise.
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let index = 2; index < Math.sqrt(num); index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
};
const animals = [
    { name: "Lion", age: 5 },
    { name: "Elephant", age: "10" },
    { name: "Giraffe", age: 7 },
    { name: "Tiger", age: "3" },
];
const calcAnimalAge = (animals) => {
    let totalAge = 0;
    for (const animal of animals) {
        if (typeof animal.age === "string") {
            totalAge += parseInt(animal.age);
        }
        else {
            totalAge += animal.age;
        }
    }
    return totalAge;
};
console.log(calcAnimalAge(animals));
// Problem: Write a TypeScript function that takes in a string and returns a new string with the words in reverse order. Assume that words in the input string are separated by a single space.
