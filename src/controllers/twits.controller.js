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
            const url = e.tweet.entities.urls[0].expanded_url
            if(regex1.test(url) || regex2.test(url)) {
              videojs(`video-${e.tweet.id}`,{
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
              console.log(this.getId(url))
              socketService.youTubeTitle(this.getId(url)).then(title => {
                console.log(JSON.parse(title.data).title)
                timeout(() => {
                  console.log(title.data)
                  e.youtubeTitle = JSON.parse(title.data).title
                })
              })
            }
        })
      },1)
    })
  }
  getId(url) {
    const arr = url.split('/')
    const lastItem = arr.length - 1
    return arr[lastItem].replace(/watch\?v=/g, '').replace(/&.*/g,'')
  }
  getTwits(lat='', long=''){
    this.socketService.getTwits(lat, long).then(
      twits => {
        this.twits = twits.data.statuses.map(e => {
          return {
            youtubeTitle: '',
            tweet: e
          }
        })
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
