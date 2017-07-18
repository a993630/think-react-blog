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
	let isDev = process.env.NODE_ENV === 'development';
	let config = {
		context: __dirname,//绝对路径
		resolve: {
			extensions: ['.js', '.jsx'],
		},
		plugins: [
			new ForceCaseSensitivityPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'process.env.COMMON_FORCE': JSON.stringify(process.env.COMMON_FORCE),
				'process.env.COMPILE_M': JSON.stringify(process.env.COMPILE_M)
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
		],
		module: {
            rules: [
                {
                    test: /\.html/,
                    use: [
                        {
                            loader: 'html',
                            options: {
                                'removeAttributeQuotes': false
                            }
                        },
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options: {
                        "plugins": [["import", {
                            "libraryName": "antd",
                            "style": true,   // or 'css'
                        }]],
                        "presets": ["react"]
                    },
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.css$/,
                    loader: isDev ? 'style-loader!css-loader?sourceMap' : ExtractTextPlugin.extract('style', 'css-loader?sourceMap'),
                },
                {
                    test: /\.less$/,
                    loader: isDev ? 'style-loader!css-loader?sourceMap!less-loader?sourceMap' : ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap'),
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
            ]
		},
	};
	config.output = {
		path: conf.staticPath,
		filename: conf.bundle.jsName,
		publicPath: conf.publicPath || '/static/'
	};
	if (conf.server_render !== true) {
		if (env !== 'local' && env !== 'development' && process.env.SERVER_RENDER !== 'true') {
			config.plugins.push(new webpack.optimize.UglifyJsPlugin({
				compress: {
					drop_console: true,
					warnings: false
				}
			}));
		} else {
			config.devtool = 'inline-source-map';
		}
	}
	return config;
}

module.exports = getBaseConf;
