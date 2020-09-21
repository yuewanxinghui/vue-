/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};

	// 配置服务器基本信息
	// config.cluster = {
	// 	listen: {
	// 		path: '',
	// 		port: 8000,
	// 		hostname: 'admin.jianmian.com', //默认localhost和ip地址,上线时用0.0.0.0
	// 	}
	// };

	// config/config.default.js文件
	//关闭csrf
	config.security = {
		csrf: {
			enable: false
		}
	}

	// //更改post的请求大小
	// module.exports = {
	// 	bodyParser: {
	// 		jsonLimit: '1mb',
	// 		formLimit: '1mb',
	// 	},
	// };

	//文件模式
	config.multipart = {
		mode: 'file',
	};

	//数据库配置   要下载模块本地依赖
	config.mysql = {
		client: {
			//host
			host: "localhost",
			//端口
			port: "3306",
			//用户名
			user: "root",
			//密码
			password: "root",
			//数据库名
			database: "bookstore"
		}
	}

	//跨域配置
	config.cors = {
		origin: '*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
	};






	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1600652463813_7036';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	return {
		...config,
		...userConfig,
	};
};
