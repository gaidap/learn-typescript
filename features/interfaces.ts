interface Reportable {
  summary(): string;
}

const oldCivic = {
  modelName: 'civic',
  year: new Date('1995-12-17T03:24:00'),
  broken: true,
  summary(): string {
    return `Name: ${this.modelName}
      Year: ${this.year.toDateString()}
      Broken? ${this.broken ? 'Yes' : 'No'}`;
  }
};

const myDrink = {
  color: 'red',
  carbonated: true,
  sugar: 100,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

function printSummary(item: Reportable): void {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(myDrink);