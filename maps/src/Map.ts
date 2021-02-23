export class Map {
  googleMap: google.maps.Map;

  constructor() {
    this.initNewMap();
  }

  // Quick and simple solution to hide api key with dotenv
  private initNewMap() {
    try {
      this.googleMap = new google.maps.Map(document.getElementById('map'), {
        backgroundColor: 'white',
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      });
    } catch (error) {
      if (error.message.includes('google is not defined')) {
        setTimeout(this.initNewMap, 10);
      } else {
        throw error;
      }
    };
  }
}
