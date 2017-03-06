var evn = process.env.NODE_ENV || 'local';
var confpath = './webpack-' + evn + '-conf.js';
var conf = require(confpath);
var lodash = require('lodash');
var path = require('path');

var config = {
	staticUrl: '',
	staticPath: path.join(process.cwd(), '/dist/static'),
	publicPath: '',
	bundle: {
		dllJsName: 'dll-[hash]-bundle.js',
		jsName: '[name]-[hash].js',
		cssName: '[name]-[hash].css',
	},
};

module.exports = lodash.merge(config, conf);