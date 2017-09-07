
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
};
