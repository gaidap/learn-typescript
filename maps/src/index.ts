// use curly brackets if you want to import a specific entity from a file
// without curly braces the library has to declare a default export.
import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';

const customMap = new Map('map');

const user = new User();
customMap.addMarker(user);
const company = new Company();
customMap.addMarker(company);