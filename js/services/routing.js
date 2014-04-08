/**
 * Created by rforbes on 3/26/14.
 */
var app = angular.module('museApp', ['ngRoute', 'dataServices']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/module/:year/:id', {templateUrl: 'partials/entities.html', controller: 'EntitiesCtrl'})
        .when('/fields/:year/:moduleId/:id', {templateUrl: 'partials/fields.html', controller: 'FieldsCtrl'})
        .when('/addEntity/:moduleId', {templateUrl: 'partials/entity.html', controller: 'EntityCtrl'})
        .when('/updateEntity/:id', {templateUrl: 'partials/entity.html', controller: 'EntityCtrl'})
        .when('/series/:id', {templateUrl: 'partials/series.html', controller: 'SeriesCtrl'})
        .otherwise({redirectTo: '/', controller: 'ModuleCtrl'})
}]);