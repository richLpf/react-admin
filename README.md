
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


已完成：



待完成：

- 【P0】 表单功能扩展
	- 字段CSV下载
	- 列表全选，折叠展开
- 【P0】 水印功能
- 【P0】 看板展示信息
- 【P0】 表格和excel

一、大屏页面展示

二、罗盘的全局搜索功能

一、各种表单布局
- 填写表单

二、各种详情页面
- 水印功能

三、各种表格封装
- 显示不同的表格头

四、表格和Excel
- 表格下载excel
- 表格上传excel
- 表格选择下载数据
- 表格编辑
- 拖拽



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
- 页面放大F11效果
- 大屏幕展示和全局总览设计
- mockjs引入
- markdown
- 



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

### 倒计时展示时间，react中使用定时器的方法

```
const [currentDate, setCurrentDate] = useState(dateNow)

const timerRef = useRef()

useEffect(() => {
    timerRef.current = setInterval(() => {
        setCurrentDate(moment().format("YYYY年MM月DD日 HH:mm:ss"))
    }, 1000)
    return () => {
        timerRef.current && clearInterval(timerRef.current)
    }
})
```

### 全屏放大和缩小（F11效果）

```
//cnpm i -S screenfull

if(screenfull.isEnabled){
    screenfull.toggle()
}

// 底层实现的方式探索
```

### 水印的实现


### 大屏展示

dataV

### react 引导页面




### 错误页面展示


## 代码目录


## 安装运行

## 常见问题

结尾


项目增加吐槽的地址，增加跳转的入口到github

欢迎加入前端群：10232323233

