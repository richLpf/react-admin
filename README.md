This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## react 切换端口号运行

## 生成路由，组织路由，登录页面

前端系统路由配置

通常我们在app.js种增加路由入口


## 路径按需加载

## 引入代码格式化

`prettier`,  版本越高，需要的node版本越高

```
cnpm i prettier -D
```

package.json
```
"scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "prettier": "prettier --parser --write ./src/**/*.js"
},
```
在package.json中添加prettier, 对应的执行语句

每次运行npm run prettier  /src目录下的js文件将会进行格式化



待完成：

- 【P0】 表单功能扩展
	- 字段CSV下载
	- 列表全选，折叠展开
- 【P0】 水印功能
- 【P0】 看板展示信息

规划：

- 代码规范（工程化内容）、目录规范
- Antv 引入和表单相关内容使用整理
- 增加后台系统名称
- 操作日志展示
- 富文本操作及说明（不同富文本的使用），上传图片
- 图片上传和展示
- redux引入和使用
- 指引页的引入
- 说明文档的引入，不同的界面适应不同的应用场景
- 自动发布cicd
- 表格相关，表单联动选择，表格内部编辑
- 自动打包部署
- 表单的增删
- axios的引入和封装
- oss的引入
- 性能监控和优化


待定：

```
## 前端预发环境反代理proxy

(参考文章)[https://segmentfault.com/a/1190000014891894]

## 前端单元测试

## 自动化发布

## 更换皮肤

## 指引页面

## 文档

## 常见组件

## 登录页面


## echart 在react中使用

### 正常使用

### 按需引入使用echarts-for-react
https://www.jianshu.com/p/f6c1c4618c22

### 常用图表

柱状图

折线图

饼图

### 用户信息或共用信息缓存

redux

### 图片放大

react-zmage

```


## 解决方案

长列表

https://juejin.im/post/5af03345f265da0b7964cf50

## 前端日志展示方式


## 前言

开发了很多后台管理系统，遇到的大部分需求都是一样的，但是每次都要查文档，或者相同的需求解决方案都不太一样，所以整理这个后台管理系统，将中后台中常见的功能放在一起，并加入不同场景需求的解决方案，方便后面新的需求开发需要。

- github地址
- 预览地址

## 依赖模块

项目开发使用`create-react-app`,下面是主要的依赖包

- react-router react路由
- antd 一个好用的ui框架
- axios 一个ajax请求封装的库
- prettier 代码格式化插件

## 功能模块

### 首页

首页布局

换肤功能（也是很重要的功能）

指引页功能

帮助文档

### 看板

> 每个管理系统基本都是需要看板的，各种数据对于老板来说，最需要看的是全局，这里我汇总了几种常见的看板展示，适用不同的场景

### 常用需求

富文本(上传图片)

图表

登录（sso）

页面loading整理规划

1、页面加载前动画
2、调用接口的动画，将动画封装，统一调用，统一修改

搜索配置，弹框，页面搜索




### 错误页面展示


## 代码目录


## 安装运行

## 常见问题

结尾

欢迎加入前端群：10232323233