/**
 * @file This is the controller that handles the post form
 */
/**
 * @class
 */
import {getGeolocation, getCity} from '../utils/'
export default class PostController {
  constructor (scope, socketService, rootScope) {
    this.url = ''
    this.message = ''
    this.socketService = socketService
    this.place = ''
    this.rootScope = rootScope
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
        this.rootScope.$emit('reload-twits')
        this.url = ''
        this.message = ''
        console.log(res)
      },
      err => {
        console.log(err)
      }

    )
  }
}
PostController.$inject = ['$scope', 'socketService','$rootScope']
