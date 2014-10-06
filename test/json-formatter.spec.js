'use strict';

describe('json-formatter', function () {
  var scope, $compile, $rootScope, element;

  function createDirective(template) {
    var elm;

    elm = angular.element(template);
    angular.element(document.body).prepend(elm);
    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(module('ngSanitize', 'jsonFormatter'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  afterEach(function () {
    if (element) element.remove();
  });

  describe('when created with', function () {

    describe('null', function(){
      it('should render "null"', function () {
        element = createDirective('<json-formatter json="null"></json-formatter>');

        expect(element.text()).toContain('null');
      });

    })
  });

});