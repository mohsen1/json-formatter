#JSON Formatter
JSON Formatter is an AngularJS directive for rendering JSON objects in HTML with a collapsible navigation.

![Screen Shot](https://raw.githubusercontent.com/mohsen1/json-formatter/master/app/images/screenshot.png)

##Usage
Include [`json-formatter.js`](https://raw.githubusercontent.com/mohsen1/json-formatter/master/lib/json-formatter.js) and [`json-formatter.css`](https://raw.githubusercontent.com/mohsen1/json-formatter/master/lib/json-formatter.css) from `lib` folder in your project and add `"jsonFormatter"` to your app dependencies, then use `<json-formatter>` and pass your JSON object via `json` attribute

```html
<json-formatter json="{'simple': ['one', 'two'] }"></json-formatter>
```
