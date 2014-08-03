'use strict';

angular.module('jsonFormatterApp').controller('MainCtrl', function ($scope) {
  $scope.complex = {
    numbers: [
      1,
      2,
      3
    ],
    boolean: true,
    'null': null,
    number: 123,
    anObject: {
      a: 'b',
      c: 'd',
      e: 'f\"'
    },
    string: 'Hello World'
  };

  $scope.deep = {a:{b:{c:{d:{}}}}};
});
