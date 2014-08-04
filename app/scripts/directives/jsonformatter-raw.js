'use strict';

angular.module('jsonFormatter', ['RecursionHelper']).directive('jsonFormatter', ['RecursionHelper', function (RecursionHelper) {
  function escapeString(str) {
    return str.replace('"', '\"');
  }

  // From http://stackoverflow.com/a/332429
  function getObjectName(object) {
   var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec((object).constructor.toString());
     if (results && results.length > 1) {
      return results[1];
    } else {
      return '';
    }
  }

  function link(scope) {
    scope.isArray = function () {
      return Array.isArray(scope.json);
    };

    scope.isObject = scope.json &&
      typeof scope.json === 'object';

    if (scope.isObject) {
      scope.keys = Object.keys(scope.json);
    }
    scope.type = typeof scope.json;
    scope.hasKey = typeof scope.key !== 'undefined';
    scope.constructorName = getObjectName(scope.json);

    // Set custom type for null
    if (scope.json === null){
      scope.type = 'null';
    }

    if (scope.type === 'string'){

      // Add custom type for date
      if((new Date(scope.json)).toString() !== 'Invalid Date') {
        scope.isDate = true;
      }

      // Add custom type for URLs
      if (scope.json.indexOf('http') === 0) {
        scope.isUrl = true;
      }
    }

    scope.isEmptyObject = function () {
      return scope.keys && !scope.keys.length && scope.isOpen && !scope.isArray();
    };


    // If 'open' attribute is present
    scope.isOpen = !!scope.open;
    scope.toggleOpen = function () {
      scope.isOpen = !scope.isOpen;
    };
    scope.childrenOpen = function () {
      if (scope.open > 1){
        return scope.open - 1;
      }
      return 0;
    };

    scope.openLink = function (isUrl) {
      if(isUrl) {
        window.location.href = scope.json;
      }
    };

    scope.parseValue = function (value){
      if (scope.type === 'null') {
        return 'null';
      }
      if (scope.type === 'string') {
        value = '"' + escapeString(value) + '"';
      }
      if (scope.type === 'function'){

        // Remove content of the function
        return scope.json.toString()
          .replace(/\n/g, '')
          .replace(/\{.+?\}/, '') + '{ ... }';

      }
      return value;
    };
  }

  return {
    template: '<%= jsonFormatter %>',
    restrict: 'E',
    replace: true,
    scope: {
      json: '=',
      key: '=',
      open: '='
    },
    compile: function(element) {

      // Use the compile function from the RecursionHelper,
      // And return the linking function(s) which it returns
      return RecursionHelper.compile(element, link);
    }
  };
}]);
