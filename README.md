# JSON Formatter
JSON Formatter is an AngularJS directive for rendering JSON objects in HTML with a **collapsible** navigation.

<img src="https://raw.githubusercontent.com/mohsen1/json-formatter/gh-pages/app/images/screenshot.png" width="228">

## Usage

* Install via Bower
  ```
  bower install json-formatter --save
  ```
* Add `jsonFormatter` to your app dependencies
  ```
  angular
  .module('jsonFormatterApp', [
    'ngCookies',
    ...
    'jsonFormatter'
  ])
    
  ```
* Use `<json-formatter>` directive
 
  ```
  <json-formatter json="{my: 'json'}"></json-formatter>
  ```

## Demo
See [Examples here]() 


## License

Apache 2.0
See LICENSE 
