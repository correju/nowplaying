/**
 * @param it has the instance of request-promise
 */
var rp = require('request-promise')
/**
 * @function getTitle from youtube
 */
const getTitle = (id) => {
  //console.log(`https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`)
  return rp(`https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`)
}

module.exports = {
  getTitle
}