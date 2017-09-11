import GMaps from 'gmaps';

export default {
  getCurrentPosition: () => (

    new Promise((resolve, reject) => (
      navigator.geolocation.getCurrentPosition((position) => {

        // Get the coordinates of the current possition.
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        if (!lat || !lng) {
          return reject('Unable to find your current location.');
        }

        return resolve({
          lat,
          lng,
        });
      })),
    )
  ),

  getCoords: address => (
    new Promise((resolve, reject) => {
      GMaps.geocode({
        address,
        callback: ((results, status) => {
          if (status === 'OK') {

            const location = results[0];

            if (!location) {
              return reject('Unable to find location.');
            }

            const latlng = location.geometry.location;

            const position = {
              lat: latlng.lat(),
              lng: latlng.lng(),
              formatted_address: location.formatted_address,
              city: location.address_components[2].long_name,
              address: `${location.address_components[1].long_name} ${location.address_components[0].long_name}`,
            };

            return resolve(position);
          }

          return reject('Unable to find location.');
        }),
      });
    })
  ),
};
