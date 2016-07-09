'use strict';
(function(){

class LogComponent {
  constructor(Log, $stateParams, $state) {
    var vm = this;

    vm.logs = [];
    vm.log = null;

    vm.navigate = navigate;

    activate();

    function activate() {
    	Log.get({ name: $stateParams.logName }, function(log) {
	    	vm.log = log;
	    });

    	Log.query(function(logs) {
    		vm.logs = logs;
    		setLogPosition();
    	});
    }

    function navigate(direction) {
    	var targetLog = direction === 'PREV' ? vm.logs[--vm.log.position] : vm.logs[++vm.log.position];
    	$state.go($state.current, { logName: targetLog.name });
    }

    function setLogPosition() {
    	angular.forEach(vm.logs, function(log, i) {
    		if(vm.log._id === log._id) {
    			vm.log.position = i;
    		}
    	});
    }
  }
}

angular.module('exerciseBApp')
  .component('log', {
    templateUrl: 'app/log/log.html',
    controller: LogComponent,
    controllerAs: 'ctrl'
  });

})();
