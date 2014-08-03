'use strict';

angular.module('jsonFormatter', ['RecursionHelper']).directive('jsonFormatter', ['RecursionHelper', function (RecursionHelper) {
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
    scope.constructorName = scope.json && scope.json.constructor && scope.json.constructor.name;

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

    scope.escapeString = function (str) {
      return str.replace('"', '\"');
    };

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
  }

  return {
    template: '<div ng-init="isOpen = open && open > 0" class="json-formatter-row">\n' +
    '  <a ng-click="toggleOpen()">\n' +
    '    <span class="toggler {{isOpen ? \'open\' : \'\'}}" ng-if="isObject"></span>\n' +
    '    <span class="key" ng-if="hasKey">{{key}}:</span>\n' +
    '    <span class="value">\n' +
    '      <span ng-if="isObject">\n' +
    '        <span class="constructor-name">{{constructorName}}</span>\n' +
    '        <span ng-if="isArray()"><span class="bracket">[</span><span class="number">{{json.length}}</span><span class="bracket">]</span></span>\n' +
    '      </span>\n' +
    '      <span ng-if="!isObject && type !== \'string\'" class="{{type}}">{{type === \'null\' ? \'null\' : json}}</span>\n' +
    '      <span ng-if="!isObject && type === \'string\'" class="{{type}}" \n' +
    '        ng-class="{date: isDate, url: isUrl}"\n' +
    '        ng-click="openLink(isUrl)">"{{escapeString(json)}}"</span>\n' +
    '    </span>\n' +
    '  </a>\n' +
    '  <div class="children" ng-if="keys.length && isOpen">\n' +
    '    <json-formatter ng-repeat="key in keys" json="json[key]" key="key" open="childrenOpen()"></json-formatter>\n' +
    '  </div>\n' +
    '  <div class="children empty object" ng-if="isEmptyObject()"></div>\n' +
    '  <div class="children empty array" ng-if="keys && !keys.length && isOpen && isArray()"></div>\n' +
    '</div>\n' +
    '',
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
