let path = require('path');

const webpack = require('webpack');

const getBaseConf = require('./webpack.config.base');

const lodash = require('lodash');

const envConf = require('./env-conf/webpack-conf.js');

let conf = lodash.cloneDeep(getBaseConf());

console.log(process.env.NODE_ENV, '检测');
if(process.env.NODE_ENV === 'development') {//开发环境
	console.log(process.cwd());
	conf.entry = [
		'webpack-hot-middleware/client?path=http://localhost:5800/__webpack_hmr',
		`${process.cwd()}/client/front/global`
	]
}else {
	conf.entry = [
		`${process.cwd()}/client/front/global`
	];
}
conf.externals = {//公共模块处理
	// jquery: 'jQuery',
	redux: 'redux',
	// 'react-router': 'reactRouter',
	// moment: 'moment',
	lodash: 'lodash',
};

const getHtmlConf = require('./html-config');
getHtmlConf(conf, envConf);
module.exports = conf;
 