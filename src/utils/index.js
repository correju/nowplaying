 /**
  * @file this file the function to get gcordinates using lat and long
  */
const getGeolocation = () => {
  return new Promise( (res, rej) => {
    navigator.geolocation.getCurrentPosition( (data) => {
      res({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      })
    });
  })
}
const getCity = (lat, long) => {
  return fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false`)
    .then(function(response) {
      return response.json();
    })
}
export {
  getGeolocation,
  getCity
}