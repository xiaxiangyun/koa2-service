# koa2-service

>  参考文章：[koa2从搭建项目到实现API](https://www.jianshu.com/p/3e35db2c8d6c)、[koa2 从入坑到放弃](https://www.jianshu.com/p/bb72104a3a01)

本项目采用[koa](https://github.com/koajs/koa)框架搭建，实现个人小程序及小程序后台管理系统的服务端功能。

## 目录

- [安装](#安装)
- [使用](#使用)
- [配置项](#配置项)
- [项目结构](#项目结构)
- [历史](#历史)
- [维护者](#维护者)
- [开发者](#开发者)
- [License](#license)

## 安装

```javascript
yarn install // 安装依赖
```

## 使用

```javascript
yarn start
```

## 配置项

- config/db.js

  需要配置数据库相关内容

## 项目结构

```javascript
├── bin                     // 启动目录
├── config                  // 配置目录
├── controllers             // 控制器
├── modules                 // 实体模型
├── public                  // 公共资源
├── routes                  // 路由
├── schema                  // 数据表模型实例
├── views                   // 视图
├── app.js                  // 入口文件
```

## 历史

- 20200427：搭建项目

## 维护者

[@Leayh](https://github.com/xiaxiangyun)

## 开发者

[@Leayh](https://github.com/xiaxiangyun)

## License

MIT © 2020
