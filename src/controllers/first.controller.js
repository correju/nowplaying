export default class FirstController {
  constructor (scope) {
    this.x = 'hola esto es un binding'
  }
}
FirstController.$inject = ['$scope']
