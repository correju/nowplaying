 /**
  * @file this file the function to get gcordinates using lat and long
  */
const getGeolocation = () => {
  return new Promise( (res, rej) => {
    res({
      latitude: '3.3937852',
      longitude: '-76.5303587'
    })
  })
}
const getCity = (lat, long) => {
  return fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=false`)
    .then(function(response) {
      return response.json();
    })
}

const mapDomElements = (selector) => {
  let selectorArr = [].slice.call(document.querySelectorAll(selector))
  return (f) => {
    return selectorArr.map(f)
  }
}
export {
  getGeolocation,
  getCity,
  mapDomElements
}