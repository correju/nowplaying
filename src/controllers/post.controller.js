/**
 * @file This is the controller that handles the post form
 */
/**
 * @class
 */
import {getGeolocation, getCity} from '../utils/'
export default class PostController {
  constructor (scope, socketService) {
    this.url = ''
    this.message = ''
    this.socketService = socketService
    this.place = ''
    getGeolocation().then(
      res => {
        // console.log(res)
        getCity(res.latitude, res.longitude)
          .then(location=>{
            //console.log(location)
            location.results.forEach((element) => {
              if (element.types[0] === 'administrative_area_level_2')
                this.place = element.formatted_address
            });
          })
          .catch(err => {
            console.log(err)
          })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  post () {
    this.socketService.postTwit({
      url: this.url,
      message: this.message
    }).then(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }

    )
  }
}
PostController.$inject = ['$scope', 'socketService']
