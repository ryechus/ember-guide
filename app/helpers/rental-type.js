import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

const localCities = [
  'San Francisco'
]

export function rentalType([type, city]/*, hash*/) {
  var _string = ""
  if (communityPropertyTypes.contains(type)) {
    _string += 'Community';
  }else {
    _string += 'Standalone';
  }
  if (localCities.contains(city)) {
    _string += '(Local)';
  }
  return _string;
}

export default Ember.Helper.helper(rentalType);
