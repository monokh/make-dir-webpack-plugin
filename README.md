# make-dir-webpack-plugin
[![npm version](https://badge.fury.io/js/make-dir-webpack-plugin.svg)](https://badge.fury.io/js/make-dir-webpack-plugin)
by [Monokh](https://monokh.com)

Make directories in webpack compilation

Useful when another webpack plugin depends on a directory existing

## Installation
`
npm install make-dir-webpack-plugin --save-dev
`

## Usage
You need to pass options with `dirs` array.

This is an array of `dirSpec`s which describe what directories need to be created. A dir spec has the following format:

- `path`: The path of the folder to create

## Examples
```
var MakeDirWebpackPlugin = require('make-dir-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new MakeDirWebpackPlugin({
      dirs: [
        { path: './dist/folder1' },
        { path: './dist/folder2' }
      ]
    })
  ]
};
```

## Change Log

### 0.1.0
- Fixed bug that didn't allow nested directories to be created.