import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const getApiKey = (): string => {
  return process.env.API_KEY;
};

function loadGoogleMapsApi() {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${getApiKey()}`;
  document.body.insertBefore(script, document.getElementById('mainScript'));
}

loadGoogleMapsApi();