'use strict';

// from http://stackoverflow.com/a/18609594
angular.module('RecursionHelper', []).factory('RecursionHelper', ['$compile', function($compile){
  return {
    /**
     * Manually compiles the element, fixing the recursion loop.
     * @param element
     * @param [link] A post-link function, or an object with function(s)
     * registered via pre and post properties.
     * @returns An object containing the linking functions.
     */
    compile: function(element, link){
      // Normalize the link parameter
      if(angular.isFunction(link)){
        link = { post: link };
      }

      // Break the recursion loop by removing the contents
      var contents = element.contents().remove();
      var compiledContents;
      return {
        pre: (link && link.pre) ? link.pre : null,
        /**
         * Compiles and re-adds the contents
         */
        post: function(scope, element){
          // Compile the contents
          if(!compiledContents){
            compiledContents = $compile(contents);
          }
          // Re-add the compiled contents to the element
          compiledContents(scope, function(clone){
            element.append(clone);
          });

          // Call the post-linking function, if any
          if(link && link.post){
            link.post.apply(null, arguments);
          }
        }
      };
    }
  };
}]);

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

    // If 'open' attribute is present
    scope.isOpen = !!scope.open;

    scope.type = typeof scope.json;
    scope.hasKey = typeof scope.key !== 'undefined';

    scope.escapeString = function (str) {
      return str.replace('"', '\"');
    };

    // Set custom type for null
    if (scope.json === null){
      scope.type = 'null';
    }

    scope.isEmptyObject = function () {
      return scope.keys && !scope.keys.length && scope.isOpen && !scope.isArray();
    };

    scope.constructorName = scope.json && scope.json.constructor && scope.json.constructor.name;
  }

  return {
    templateUrl: 'templates/json-formatter.html',
    restrict: 'E',
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
