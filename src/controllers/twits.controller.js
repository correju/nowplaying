/**
 * @file This file is that handles the tweets that were retrieve from server
 */
/**
 * @class
 */
export default class TwitsController {
  constructor (scope, socketService) {
    this.data = []
    this.getGeolocation()
    this.socketService = socketService

  }
  getTwits(lat='', long=''){
    this.socketService.getTwits(lat, long).then(
      twits => {
        this.data = twits.data.statuses
      },
      err => {
        console.log(err.message)
      }
    )
  }
  getGeolocation(){
    navigator.geolocation.getCurrentPosition( (data) => {
      this.getTwits(data.coords.latitude,data.coords.longitude)
    });
  }
}
TwitsController.$inject = ['$scope','socketService']
