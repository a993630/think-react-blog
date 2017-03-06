var path = require('path');

var express = require('express');

var webpack = require('webpack');

var config = require('./front/webpack-package/webpack.config.js');

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		hash: false,
		version: false,
		chunks: false,
		children: false,
	},
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', express.static('./dist/static'));//托管静态资源文件

app.listen(5800, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	
	console.log('Listening at http://localhost:5800');
});