/**
 * @file This is the controller that handles the post form
 */
/**
 * @class
 */
export default class PostController {
  constructor (scope, socketService) {
    this.url = ''
    this.message = ''
    this.socketService = socketService
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
