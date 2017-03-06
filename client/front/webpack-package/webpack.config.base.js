const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');
const confweb = require('./env-conf/webpack-conf.js');
const lodash = require('lodash');


function getBaseConf(param) {
	const env = process.env.NODE_ENV || 'local';
	let params = param || {};
	const conf = confweb;
	
	let config = {
		context: __dirname,//绝对路径
		resolve: {
			extensions: ['', '.js', '.jsx'],
		},
		plugins: [
			new ForceCaseSensitivityPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'process.env.COMMON_FORCE': JSON.stringify(process.env.COMMON_FORCE),
				'process.env.COMPILE_M': JSON.stringify(process.env.COMPILE_M)
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
		],
		module: {
			loaders: [
				{ test: /\.html/, loader: 'html?removeAttributeQuotes=false' },
				{
					test: /\.jsx?$/,
					loader: 'babel',
					exclude: /(node_modules)/,
					query: {
						presets: ['react', 'es2015']
					}
				},
				{
					test: /\.js?$/,
					loader: 'babel',
					exclude: /(node_modules)/,
					query: {
						presets: ['react', 'es2015']
					}
				},
				{
					test: /\.(woff|svg)([\?]?.*)$/,
					loader: 'file?name=[name].[hash].[ext]',
				},
				{
					test: /\.(ttf|eot)([\?]?.*)$/,
					loader: 'file?name=[name].[hash].[ext]',
				},
				{
					test: /\.(jpe?g|png|gif|svg|ico)$/,
					loader: 'url?name=[name].[hash].[ext]&limit=10000',
				},
				{
					test: /\.json$/,
					loader: 'json',
				},
			],
		},
	};
	config.output = {
		path: conf.staticPath,
		filename: conf.bundle.jsName,
		publicPath: conf.publicPath || '/static/'
	};
	return config;
}

module.exports = getBaseConf;
