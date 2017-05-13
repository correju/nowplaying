import angular from 'angular'
import uiRouter from 'angular-ui-router'

/*import SearchService from './services/SearchService/'
import ConfigurationService from './services/ConfigurationService/'
import PeopleService from './services/PeopleService/'
import MovieTVService from './services/MovieTVService'

import SearchController from './controllers/SearchController/'
import SearchPanelController from './controllers/SearchPanelController/'
import PeopleController from './controllers/PeopleController/'
import MoviesTVController from './controllers/MoviesTVController'

import SearchPanelComponent from './components/SearchPanelComponent/'
import PeopleComponent from './components/PeopleComponent'
import MoviesTVComponent from './components/MoviesTVComponent'*/

const app = angular.module('app', [uiRouter])
/**
 * Services Registration
 */
/*app.service('searchService',SearchService)
app.service('configurationService',ConfigurationService)
app.service('peopleService',PeopleService)
app.service('movieTVService',MovieTVService)*/

/**
 * Controllers Registration
 */
/*app.controller('searchController', SearchController)
app.controller('searchPanelController', SearchPanelController)
app.controller('peopleController', PeopleController)
app.controller('moviesTVController', MoviesTVController)*/


/**
 * Controllers Registration
 */
/*
app.component('searchPanel', SearchPanelComponent)
app.component('peopleComponent', PeopleComponent)
app.component('moviesTvComponent', MoviesTVComponent)
*/
/**
 * Router configuration
 */
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('todos', {
            url: '/',
            template: ''
        })
        $locationProvider.html5Mode(true)
})

export default app