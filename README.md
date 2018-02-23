# 一款基于vue-cli初始化的vue组件模板（也可以作为js的库的初始化模板。*不推荐用于单页应用的搭建模板*），使用webpack来编译及测试环境搭建

> Share Vue components!

一个非常简单的[vue-cli]（https://github.com/vuejs/vue-cli）模板，可以用`.vue`组件编写和发布vue插件。

主要思路来源于 [vue-share-components](https://github.com/Akryum/vue-share-components)、[simple-cli](https://github.com/strongdevx/simple-cli).


# 用法

```
npm i -g vue-cli
vue init WTMR/istrong-template components-name
```
components-name 为你的组件名称。

# 问题解释
## 请选择适用范围？
①通用（以@istrong作为前缀）

②项目（自行定义名字，没有前缀）

选择通用，则会以@istrong作为前缀，比如你输入的组件名是：your-component，那么最终发布成npm包的名称为@istrong/your-component，这样做的好处是，**所有前缀为@strongsoft的组件被安装下来时都会放在node_modules/@istrong目录下**方便阅读

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

## 常用命令

* 安装依赖：npm install
* 启动本地服务器：npm run dev
* 代码规范检测：npm run lint
* 自动修复代码规范问题：npm run fix
* 发布成npm包：npm publish
