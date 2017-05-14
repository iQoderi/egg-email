# egg-email

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-email
[travis-image]: https://img.shields.io/travis/eggjs/egg-email.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-email
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-email.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-email?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-email.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-email
[snyk-image]: https://snyk.io/test/npm/egg-email/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-email
[download-image]: https://img.shields.io/npm/dm/egg-email.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-email

Email 插件是为 egg 提供 email 邮件服务的功能

## 依赖的 egg 版本

egg-email 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌


## 安装
```bash
$ npm install egg-email --save
```

## 开启插件

```js
// config/plugin.js
exports.email = {
  enable: true,
  package: 'egg-email',
};
```

## 配置

通过`config/plugins.js` 来启动 Email 插件

```js
exports.email = {
    enable: true,
    package: 'egg-email',
}
```

在 `config/config.${env}.js`配置各个环境的邮件服务连接信息；

### 单数据源

```js
exports.email = {
    client: {
       host: 'smtp.qq.com',
       secureConnection: true,
       port: 465,
       auth: {
           user: 'test_user',
           pass: 'test_pass'
       }
    }
}
```
使用方法:

```js
const mailOptions = {
    from: 'qoderplus@gmail.com',
    to: 'test_user@qq.com',
    subject: 'hello world',
    html: `<a href = 'link'>点击链接进行验证</a>`
};

app.email.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log('error:', error);
    } else {
        console.log('email sent: ' + response.message);
    }
    app.email.close();
});

```
### 多数据源

```js
exports.email = {
  clients: {
      mail1: {
         host: 'smtp.qq.com',
         secureConnection: true,
         port: 465,
         auth: {
             user: 'test_user',
             pass: 'test_pass'
         }, 
      },
  },
  //所有的邮件服务配置默认值
  default: {
      
  }
};
```

使用方法:
```js
const client1 = app.email.get('mail1');
//...
const client2 = app.email.get('mail2');
```

## 扩展

### app.js

#### app.email


如果开启了 `config.email.app = true`，则会在 app 上注入 [nodemailer] 客户端 的 [Singleton 单例](https://github.com/eggjs/egg/blob/master/lib/core/singleton.js)。


### agent.js

#### agent.mysql

如果开启了 `config.email.agent = true`，则会在 agent 上注入 [nodemailer] 客户端 的 [Singleton 单例](https://github.com/eggjs/egg/blob/master/lib/core/singleton.js)。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
