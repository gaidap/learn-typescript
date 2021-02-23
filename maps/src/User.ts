import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
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

  markerContent(): string {
    return `<b>${this.fullName}</b>`;
  }
}