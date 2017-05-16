/**
 * @file This file configures all instances Services, Controllers and Components and injects them to angular
 */
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import PostController from './controllers/post.controller'
import TwitsController from './controllers/twits.controller'
import TwitsComponent from './components/twits.component'
import PostComponent from './components/post.component'
import SocketService from './services/socket.service'
import 'ngtweet'
import 'videojs-youtube'
import 'vjs-video'
import "video.js/dist/video-js.css"
import "./styles/custom-videojs.css"
const app = angular
  .module('app', [uiRouter,'ngtweet','vjs.video'])
  .service('socketService', SocketService)
  .controller('postController', PostController)
  .controller('twitsController', TwitsController)
  .component('twitsComponent', TwitsComponent)
  .component('postComponent', PostComponent)
  .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('initial', {
        url: '/',
        template: `
          <post-component></post-component>
          <twits-component></twits-component>
        `
      })
    $locationProvider.html5Mode(true)
  })
  app.directive("emitWhen", function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var params = scope.$eval(attrs.emitWhen),
                event = params.event,
                condition = params.condition;
            if(condition){
                scope.$emit(event);
            }
        }
    }
});
export default app