'use strict';

(function() {

  class MainController {

    constructor(Log, $log) {
      var vm = this;

      Log.query(function(logs) {
        vm.logs = logs;
      }, function() {
        $log.log('Cannot find logs');
      });
    }
  }

  angular.module('exerciseBApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'ctrl'
    });
})();
