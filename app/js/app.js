function MainRouter ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '../states/clock.html'
    });










  $urlRouterProvider.otherwise('/');
}


angular
.module('ClockApp', ['ui.router','ngMaterial'])
.config(MainRouter);
