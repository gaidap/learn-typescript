// type inference for arrays
const carMakers = ['ford', 'toyota', 'opel'];

// explicit types for arrays
const bugs_1: string[] = ['hissing cockroach', 'lady bug'];
const bugs_2: Array<string> = ['hissing cockroach', 'lady bug'];

//  example for more dimensional array
const carsByManufacturer: string[][] = [
  ['f150'],
  ['corolla'],
  ['gt']
];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// carMakers.push(100);

// help for build in functions
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// flexible types 
const importantDates_1: Array<string | Date> = [new Date(), '2030-10-10'];
const importantDates_2: (string | Date)[] = [new Date(), '2030-10-10'];