const profile = {
  profileName: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// example of destructuring ES2015 style
const { age, profileName }: { age: number; profileName: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;