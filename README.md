# An easy-to-use vue-cli template to publish components

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Share Vue components!

A very simple [vue-cli](https://github.com/vuejs/vue-cli) template to write and publish vue plugins with `.vue` components.

This package is heavily inspired by [vue-share-components](https://github.com/Akryum/vue-share-components) projects.


# Usage

```
npm i -g vue-cli
vue init WTMR/istrong-vue-components-create components-name
```

# Plugin Development

## Installation

The first time you create or clone your component, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run build
npm run dev
```

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```


