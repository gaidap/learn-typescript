import { User } from './User';
import { Company } from './Company';

interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class Map {
  googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.initNewMap(elementId);
  }

  addMarker(newMappable: Mappable): void {
    this.addMarkerDelayed((mappable: Mappable, map: google.maps.Map): void => {
      new google.maps.Marker({
        map: map,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
      });
    }, newMappable);
  }

  // Quick and simple solution to wait for google maps api to load in benefit of hiding the api key with dotenv
  private initNewMap(elementId: string): void {
    try {
      const newCustomMap = new google.maps.Map(document.getElementById(elementId), {
        backgroundColor: 'white',
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
      this.googleMap = newCustomMap;
    } catch (error) {
      if (error.message.includes('google is not defined')) {
        setTimeout(this.initNewMap, 100, elementId);
      } else {
        throw error;
      }
    };
  }
  private addMarkerDelayed(delayedFn: Function, mappable: Mappable) {
    if (this.googleMap !== undefined) {
      delayedFn(mappable, this.googleMap);
    } else {
      setTimeout(this.addMarkerDelayed, 100, delayedFn, mappable);
    }
  }
}
