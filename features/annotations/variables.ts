// basic types
let apples: number = 5;
let speed: string = 'fast';
let nothing: null = null;
let nope: undefined = undefined;
let emptyness: void = undefined;
let anotherNumber = 5;

// Rely on type interference as often as possible
// Use explicit type annotations if it is necessary:
// - When a function returns any and we need to clarify the value
// - When we split declaration and initiakization
// - When we want a variable to have a type that can't be inferred (custom types)

// arrays
let colors: string[] = ['1', '333', '123'];

// classes
class Engine {

}

class Car {
  motor: Engine
}

let myCar: Car = new Car();
myCar.motor = new Engine();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//  When to use annotaions
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element === 'green') {
    foundWord = true;
  }
}

// 3) variable whode type cannot be inferred correctly
let numbers = [-12, 6, -4];
let firstNumberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (number > 0) {
    firstNumberAboveZero = number;
  }
}