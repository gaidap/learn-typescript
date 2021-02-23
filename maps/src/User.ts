import faker from 'faker';

export class User {
  fullName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.fullName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}