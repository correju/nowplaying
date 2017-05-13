import angular from 'angular'
import uiRouter from 'angular-ui-router'

import FirstController from './controllers/first.controller'
import TwitsController from './controllers/twits.controller'
import TwitsComponent from './components/twits.component'

const app = angular.module('app', [uiRouter])

app.controller('firstController', FirstController)
app.controller('twitsController', TwitsController)

app.component('twitsComponent', TwitsComponent)

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('todos', {
            url: '/',
            template: '<twits-component></twits-component>'
        })
        $locationProvider.html5Mode(true)
})

export default app