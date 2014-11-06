# JSON Formatter 
[![Build Status](https://travis-ci.org/mohsen1/json-formatter.svg?branch=master)](https://travis-ci.org/mohsen1/json-formatter)

JSON Formatter is an AngularJS directive for rendering JSON objects in HTML with a **collapsible** navigation.

[![Screebshot](./screenshot.png)](http://mohsenweb.com/json-formatter/demo/demo.html)

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
See [Examples here](http://mohsenweb.com/json-formatter/demo/demo.html) 


## Browser Support
All modern browsers are supported. Lowest supported version of Internet Explorer is **IE9**.

## License

Apache 2.0

See LICENSE 
