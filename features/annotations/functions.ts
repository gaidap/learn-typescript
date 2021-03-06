const add = (a: number, b: number): number => {
  return a + b;
};

// You should always use annotations for return types 
const subtract = (a: number, b:number) => {
  a-b; // here we can easyly miss a bug, because now it is returing void instead of number!
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (foreCast: { date: Date, weather: string }): void => {
  console.log(foreCast.date);
  console.log(foreCast.weather);
}

// destructured
// const logWeather = ({date, weather}: {date: Date, weather: string}):void =>{
//   console.log(date);
//   console.log(weather);
// }

logWeather(todaysWeather);