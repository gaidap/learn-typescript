class Vehicle {
  // Many boilerplate
  // color: string = undefined;
  // constructor(color: string) {
  //   this.color = color;
  // }

  // Less code same result
  constructor(public color: string) { }

  protected drive(): void {
    console.log('wrooom wroooooom!');
  }
  protected honk(): void {
    console.log('meeeeep!');
  }
  open(): void {
    console.log('klickidiklack.')
  };
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected honk(): void {
    console.log('toooooot');
  }

  pressHorn(): void {
    this.honk();
  }

  startDriving(): void {
    this.drive();
  }
}

const myCar = new Car(4, 'red');
console.log(myCar.color);
console.log(myCar.wheels);
myCar.open();
myCar.startDriving();
myCar.pressHorn();