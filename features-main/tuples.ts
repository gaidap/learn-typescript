const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// tuples has fixed order and place of types
const pepsi: [string, boolean, number] = ['brown', true, 40];

// alternatively we can declare a type alias
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 44];

// tuples should not be used often
const carSpecs_1: [number, number] = [400, 3354];

// use an object instead for clarity
const carSpecs_2 = {
  horsepower: 400,
  weight: 3354
} ;