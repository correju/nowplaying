/**
 * @file This file is the service gets and post twitter messages
 */
/**
 * @class
 */
export default class socketService {
    constructor ($http, $timeout) {
      this.http = $http
      this.timeout = $timeout
        this.twits = []
        // var socket = io.connect('http://localhost:5151')
        /**/
        /*socket.on('twit', (twit) => {
          $timeout( () => {
              this.twits.push(twit)
              console.log(twit)
            }
          )
        })*/

    }
    getTwits(lat='', long=''){
      if (lat !== '', long !== '') return this.http.get(`getTwits/${lat}/${long}`)
      return this.http.get(`getTwits`)
    }
    postTwit(body={}){
      return this.http.post(`post`,body)
    }
    youTubeTitle(id){
      return this.http.get(`getTitle/${id}`)
    }
    setList(list){
      this.list = list
    }
    getList(){
      return this.list
    }
}

socketService.$inject = ['$http','$timeout']