# 一款基于vue-cli初始化的vue组件模板（也可以作为js的库的初始化模板。*不推荐用于单页应用的搭建模板*），使用webpack来编译及测试环境搭建

> Share Vue components!

A very simple [vue-cli](https://github.com/vuejs/vue-cli) template to write and publish vue plugins with `.vue` components.

This package is heavily inspired by [vue-share-components](https://github.com/Akryum/vue-share-components) projects.


# 用法

```
npm i -g vue-cli
vue init WTMR/istrong-template components-name
```
components-name 为你的组件名称。

# 开发

## 安装

首次创建或克隆组件时，需要安装默认的依赖项，这里根据你自己组件的需求去修改package.json中的依赖性，然后install

```
npm install
```

## 编译

如果你有引入第三方库，那你需要修改build/webpack.prod.conf.js文件中的externals，确保第三方的库编译时不打包到一起。

编译结果在dist目录下，本模板会将css独立打包出来。

编译运行build

```
npm run build
```

## 测试
你可以在example中去编写你的测试脚本，入口文件是example/app.js。

- 如果你要修改你的测试服务端口，可以修改build/devConfig.js文件。
- 如果你需要修改入口文件，可以修改build/webpack.dev.conf.js文件中的entry。

测试运行dev

```
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


