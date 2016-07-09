'use strict';

angular.module('exerciseBApp')
  .service('Log', function ($resource) {
    return $resource('api/logs/:name', { id: '@name' }, {
	    update: { method:'PUT' }
	});
  });
