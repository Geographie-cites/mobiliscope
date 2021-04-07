# webpack-run-after-build-plugin
Webpack plugin for doing anything after build is complete

## Usage
```js
module.exports = {
    ...,
    plugins = [
        // ... Your plugins,
        new RunAfterBuildPlugin(() => {
            console.log('Files are ready to use!');
            doSomeThings();
        })
    ]
```
