export default function() {
  this.get('/rentals', function(db, request) {
      let rentals = [{
          id: 1,
          title: 'Grand Old Mansion',
          owner: 'Veruca Salt',
          city: 'San Francisco',
          type: 'Estate',
          bedrooms: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }, {
          id: 2,
          title: 'Urban Living',
          owner: 'Mike Teavee',
          city: 'Seattle',
          type: 'Condo',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }, {
          id: 3,
          title: 'Downtown Charm',
          owner: 'Violet Beauregarde',
          city: 'Portland',
          type: 'Apartment',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }]

      if(request.queryParams.city !== undefined) {
        let filteredRentals = rentals.filter(function(i) {
          return i.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
        });
        return { rentals: filteredRentals };
      }
      else {
        return { rentals: rentals };
      }
  });
}
