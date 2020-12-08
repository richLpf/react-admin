# react 后台管理系统实践

## 前言

> 长期开发react系统，所以尝试输出一些实践方案。该项目包括：

## 项目图展示

![截图](https://raw.githubusercontent.com/richLpf/pictures/main/react-demo/admin-role.png)


## 基本技术和依赖模块
- [react](https://facebook.github.io/react/)
- [react-router](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">react 路由，4.x 的版本</span>)
- antd
- axios
- screenfull(全屏插件)
- antd

## 功能模块
- 项目布局
    - 登录页面
    - 内容页面布局
- 权限管理系统的实现
- 表格
    - 前端表格下载(cvs, excel)
    - 多选封装
- echarts图表
    - 柱状图
    - 折线图
- 定制功能
    - 水印功能

## 代码目录结构

```
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html                          ---首页入口html文件
+-- src/                                    ---核心代码目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- package.json

```

## 安装运行

> node版本、支持项目

一、下载并启动项目

```
git clone https://github.com/richLpf/react-admin.git

cd react-admin

yarn start
```

## 其他常见问题

略

## 待增加功能

略


