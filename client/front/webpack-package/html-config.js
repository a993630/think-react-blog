const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const getConf = (config, conf) => {
	function MyPlugin(options) {
		// Configure your plugin with options...
	}
	
	MyPlugin.prototype.apply = function (compiler) {
		// ...
		compiler.plugin('compilation', function (compilation) {
			compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
				// 静态改写index.ejs
				const fpath = path.join(process.cwd(), '/view/' + htmlPluginData.outputName);
				fs.writeFileSync(fpath, htmlPluginData.html);
				callback(null, htmlPluginData);
			});
		});
		
	};
	
	
	config.plugins.push(new HtmlWebpackPlugin({
		inject: false,
		filename: 'home/index_index.html',
		template: './template.ejs',
		staticUrl: conf.staticUrl,
		publicPath: conf.publicPath
	}));
	
	config.plugins.push(new MyPlugin());
};

module.exports = getConf;