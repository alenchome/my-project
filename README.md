# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



#config 里面的index文件可以修改自动弹出浏览器  11-26
autoOpenBrowser: true,

#引用阿里矢量图标 iconfont  在首页引用css ，在dom上调用类名即可
index.html  添加
<link rel="stylesheet" href="http://at.alicdn.com/t/font_2232287_1iplx2a8093.css"></link>
当项目图标发生变化时，要重新生成地址引用

#cssreset文件，在cssreset.com 获取  ； 还可以使用nomalize.css 等第三方css库让浏览器统一  （bootstrap就是用的这个） 11-27
项目开始前引入

#fastclick 解决移动端双击3毫秒 延时

#router/inidex.js 里面用
redirect: '/home' 来设置默认首页路径
mode: 'history' 来去掉默认的 # 键

# $route 当前页面 路由对象
# $router 设置路由跳转

#postman  来测试api手册是否可行
注意 api 的  方法 和 参数类型


# 封装ajax 接口请求函数 vue 用axios 发送请求
# axios 返回 promise

# api
ajax.js  封装ajax
index.js  配置api 接口函数

#git 管理项目
1. git init  生成本地仓库(初始化仓库) 
2. git add   添加文件到暂存区
3. git commit  将暂存区内容添加到仓库中
