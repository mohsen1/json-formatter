# JSON Formatter 
<a href="https://travis-ci.org/mohsen1/json-formatter">
  <img src="https://travis-ci.org/mohsen1/json-formatter.svg">
</a>

JSON Formatter is an AngularJS directive for rendering JSON objects in HTML with a **collapsible** navigation.

<a href="http://mohsenweb.com/json-formatter/dist/">
<img src="https://raw.githubusercontent.com/mohsen1/json-formatter/gh-pages/app/images/screenshot.png" width="228">
</a>

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
See [Examples here](http://mohsenweb.com/json-formatter/dist/#examples) 


## Browser Support
All modern browsers are supported. Lowest supported version of Internet Explorer is **IE9**.

## License

Apache 2.0

See LICENSE 
