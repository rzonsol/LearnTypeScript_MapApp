import { User } from './User';
import { GoogleMap } from './GoogleMap';
import { Company } from './Company';

const user = new User();
const company = new Company();

const map = new GoogleMap('map');

const userMarker = map.addMarker(user);
const companyMarker = map.addMarker(company);
