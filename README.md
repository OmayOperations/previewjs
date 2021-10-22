# previewjs
A library to preview many different languages.
## Importing
To import previewjs, load previewjs from [JSDelivr](https://cdn.jsdelivr.net/gh/OmayOperations/previewjs/preview.js) or loadjs from [JSDelivr](https://cdn.jsdelivr.net/gh/OmayOperations/previewjs/load.js)
If you chose the former, than you will have to import each module in syntax such as [https://cdn.jsdelivr.net/gh/OmayOperations/previewjs/src/html.js](https://cdn.jsdelivr.net/gh/OmayOperations/previewjs/src/html.js) but change the language (in this case HTML) to a language of your choosing.
## How-to
To get a previewjs instance working, you must call
#### HTML:
```html
<iframe id="preview"></iframe>
```
#### JavaScript:
```javascript
preview.init("preview");
```   
And that's all!
But to actually preview it, do
```javascript
preview.<language>(<code>);
```
and replacing <language> with a supported language, and <code> with your code.
## What
Previewjs is nothing more than a compiler. It takes code and compiles it.
