// Problem: Write a TypeScript function that takes in two numbers as parameters, both of type number, and returns their sum.

const addNumbers = (firstNum: number, secondNum: number): number => {
  return firstNum + secondNum;
};

// Problem: Write a TypeScript function that takes in a string as a parameter, of type string, and returns the length of the string.
const stringLength = (word: string): number => {
  return word.length;
};

// Problem: Write a TypeScript function that takes in an array of numbers as a parameter, of type number[], and returns the sum of all the numbers in the array.
const sumOfNumberArray = (array: number[]): number => {
  return array.reduce((accum, curr) => curr + accum, 0);
};

// Problem (with interface): Create an interface named Person with the following properties: name of type string, age of type number, and email of type string. Write a TypeScript function that takes in an object of type Person and returns a string representation of the person's information.

interface Person {
  name: string;
  email: string;
  age: number;
}

const printPersonsInfo = (person: Person): string => {
  return `Person is: ${person.age},${person.email},${person.name},`;
};

// Problem (with interface): Create an interface named Shape with a property named name of type string. Create two additional interfaces, Circle and Rectangle, both extending Shape and adding properties specific to a circle and a rectangle respectively. Write a TypeScript function that takes in an object of type Circle or Rectangle and returns a string representation of the shape's name and additional properties.
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}

interface Rectangle extends Shape {
  height: number;
  width: number;
}

const getShapeDetails = (shape: Circle | Rectangle): string => {
  if ("height" in shape) {
    return `This is a ${shape.name}, with a height and width of ${shape.height}x${shape.width}`;
  } else {
    return `This is a ${shape.name}, with a radius of ${shape.radius}x`;
  }
};

const newShape: Rectangle = { name: "long rectangle", height: 12, width: 2 };
getShapeDetails(newShape);

// Problem: Write a TypeScript function that takes in a number as a parameter and checks if it is a prime number. The function should return true if the number is prime, and false otherwise.
const isPrime = (num: number): boolean => {
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

// Problem: Create an interface named Animal with properties name of type string and age of type number. Write a TypeScript function that takes in an array of Animal objects and returns the total combined age of all the animals.

interface Animal {
  name: string;
  age: number | string;
}
const animals: Animal[] = [
  { name: "Lion", age: 5 },
  { name: "Elephant", age: "10" },
  { name: "Giraffe", age: 7 },
  { name: "Tiger", age: "3" },
];

const calcAnimalAge = (animals: Animal[]): number => {
  let totalAge = 0;

  for (const animal of animals) {
    if (typeof animal.age === "string") {
      totalAge += parseInt(animal.age);
    } else {
      totalAge += animal.age;
    }
  }
  return totalAge;
};
// Problem: Write a TypeScript function that takes in a string and returns a new string with the words in reverse order. Assume that words in the input string are separated by a single space.
const reverseWords = (word: string): string => {
  const newWord = word.split(" ");
  return newWord.reverse().join(" ");
};
