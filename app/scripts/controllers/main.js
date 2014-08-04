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
    string: 'Hello World',
    url: 'https://github.com/mohsen1/json-formatter',
    date: 'Sun Aug 03 2014 20:46:55 GMT-0700 (PDT)',
    func: function add(a,b){return a + b; }
  };

  $scope.deep = {a:{b:{c:{d:{}}}}};

  $scope.fn = function fn(arg1, /*arg*/arg2) {
    return arg1 + arg2;
  };


  function Person(name){ this.name = name; }
  $scope.person = new Person('Mohsen');
});
