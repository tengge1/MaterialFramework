# MaterialApp

随着时代的发展进步，我们程序员面临一系列严重问题：

1. 开发进度要求越来越快，往往是先做完项目，满意了，才跟你签合同。  
2. ExtJs、jQuery UI、EasyUI等风格的框架显得没有时代感，越来越不能满足客户的需求。  
3. 开发人员天天忙着实现各种复杂的业务功能，没时间学习提升。  
4. 网上的大部分框架只有前台js，离项目还太远。  
5. 没有灵活的业务组件，没办法像安装app一样向web框架安装功能，导致每个项目都要重写相同的功能。

于是，我想利用最新的ReactJs和material-ui等框架结合ExtApp的后台做一个后端web开发框架。其中，ReactJs用javascript渲染页面，结合最新的ECMAScript 6.0的语法，方便页面组件化。Material-UI是谷歌Material Design的一个具体实现，各种控件非常大气，富有时代感，定制性强。

然后，设计一种web框架安装包结构，可以想安装手机应用一样直接向框架安装功能，而且可以一键卸载。这种包内部包含html、css、js、cs、sql等各种文件，为了避免冲突，每个包应该只能在该包对应的文件夹中释放文件，并自动向菜单表中添加菜单，方便安装，而且要支持一键卸载功能。

## 软件演示

正在开发中。

演示Demo：https://tengge1.github.io/MaterialApp/

![image](https://github.com/tengge1/MaterialApp/blob/master/image/login-page.png)


## 相关项目

* ReactJs：https://reactjs.org/
* Material-UI：http://www.material-ui.com/
* Material Dashboard：https://timcreative.github.io/material-dashboard-pro-react/#/dashboard
* NHibernate：http://nhibernate.info/
* Spring.NET：http://www.springframework.net/
* ExtApp：https://github.com/tengge1/ExtApp
* Material Design：https://material.io/
* Material Design中文版：http://design.1sters.com/
