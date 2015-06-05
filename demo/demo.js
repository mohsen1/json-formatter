var app = angular.module('demo', ['ngSanitize', 'jsonFormatter']);

app.controller('MainCtrl', function ($scope) {
  $scope.undef = undefined;
  $scope.textarea = '{}';
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

  $scope.randArray1 = [null, null, null].map(function(r) {
    return {value: Math.random()};
  });

  $scope.randArray2 = [null, null, null].map(function(r) {
    return {value: Math.random()};
  });

  $scope.deep = {a:{b:{c:{d:{}}}}};

  $scope.fn = function fn(arg1, /*arg*/arg2) {
    return arg1 + arg2;
  };

  $scope.alternate1 = {o: 1, d: 'Alternate 1', b: []};
  $scope.alternate2 = [1, 'Alternate 2', {b: {}}];


  function Person(name){ this.name = name; }
  $scope.person = new Person('Mohsen');

  $scope.$watch('textarea', function (str){
    var result = {};

    try {
        $scope.textareaJson = JSON.parse(str);
    } catch (e) {}
  });
});
