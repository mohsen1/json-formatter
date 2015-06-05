# JSON Formatter
[![Build Status](https://travis-ci.org/mohsen1/json-formatter.svg?branch=master)](https://travis-ci.org/mohsen1/json-formatter)
[![Code Climate](https://codeclimate.com/github/mohsen1/json-formatter/badges/gpa.svg)](https://codeclimate.com/github/mohsen1/json-formatter)

JSON Formatter is an AngularJS directive for rendering JSON objects in HTML with a **collapsible** navigation.

[![Screebshot](./screenshot.png)](http://azimi.me/json-formatter/demo/demo.html)

## Usage

* Install via Bower

  ```bash
  bower install json-formatter --save
  ```
* Add `jsonFormatter` to your app dependencies
  ```js
  angular
  .module('jsonFormatterApp', [
    'ngCookies',
    ...
    'jsonFormatter'
  ])

  ```
* Use `<json-formatter>` directive

  ```html
  <json-formatter json="{my: 'json'}" open="1"></json-formatter>
  ```
* `open` attribute accepts a number which indicates how many levels rendered JSON should be opened

## Demo
See [Examples here](http://azimi.me/json-formatter/demo/demo.html)


##### `hashKey`

If you are iterating in an array of objects using `ng-repeat`, make sure you are using `track by $index` to avoid adding extra `$$hashKey` to your objects.

## Browser Support
All modern browsers are supported. Lowest supported version of Internet Explorer is **IE9**.

## License

Apache 2.0

See [LICENSE](./LICENSE)
