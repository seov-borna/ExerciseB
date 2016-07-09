'use strict';

angular.module('exerciseBApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('log', {
        url: '/log/:logName',
        template: '<log></log>',
      });
  });
