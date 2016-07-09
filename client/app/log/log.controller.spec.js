'use strict';

describe('Component: LogComponent', function () {

  // load the controller's module
  beforeEach(module('exerciseBApp'));

  var LogComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LogComponent = $componentController('LogComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
