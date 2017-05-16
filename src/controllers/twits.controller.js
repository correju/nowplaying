/**
 * @file This file is that handles the tweets that were retrieve from server
 */
/**
 * @class
 */
export default class TwitsController {
  constructor (scope, socketService, rootScope, timeout) {
    this.twits = []
    this.getGeolocation()
    this.socketService = socketService
    rootScope.$on('reload-twits', () => {
      this.getGeolocation()
    })
    scope.$on('allRendered', (e, data) => {
      timeout(() => {
        this.twits.forEach((e) => {
            const regex1 = new RegExp('youtu.be','g')
            const regex2 = new RegExp('youtube.com','g')
            const url = e.entities.urls[0].expanded_url
            if(regex1.test(url) || regex2.test(url)) {
              videojs(`video-${e.id}`,{
                sources: [
                  {
                    type: 'video/youtube',
                    src: url
                  }
                ],
                techOrder: ["youtube"],
                width: 500,
                height: 250
              })
            }
        })
      },1)
    })
  }
  getTwits(lat='', long=''){
    this.socketService.getTwits(lat, long).then(
      twits => {
        this.twits = twits.data.statuses
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
TwitsController.$inject = ['$scope','socketService', '$rootScope', '$timeout']
