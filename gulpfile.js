var gulp = require('gulp');

var eslint = require('gulp-eslint');//引入eslint代码规范检查

var gulpSequence = require('gulp-sequence').use(gulp); //规范gulp执行顺序

var gutil = require('gulp-util');//some functions

var replace = require('gulp-replace');//替换

var nodemon = require('gulp-nodemon'); //跑 node脚本

var spawn = require('child_process').spawn;//创建子进程，执行特定命令

var lodash = require('lodash');

var webpack = require('webpack');



gulp.task('default', gulpSequence(['local'])); //跑默认task

gulp.task('local', gulpSequence(['local:server', 'local:client']));

console.log(process.env.NODE_ENV,'路径');

gulp.task('local:server', () => {
	nodemon({
		script: 'www/development.js',//脚本
		env: { NODE_ENV: process.env.NODE_ENV || 'local' },//node环境监测
		watch: ['src'],//监听src文件夹
		nodeArgs: ['--debug=6012'],
	}).on('restart', () => {
		console.log('restarted server!');
	})
});

gulp.task('local:client', function () {
	spawn('node', ['client/server.js'], {
		stdio: [0, 1, 2],
	});
});


// gulp.task('watch', function () {
// 	gulp.watch(['client:common'])
// });
//
// gulp.task('client:common', function (callback) {
// 	const config = './client/webpack-package/webpack.config.js';
// 	const _webpack = spawn("webpack", [`--config`, config], {
// 		stdio: [0, 1, 2]
// 	});
// 	_webpack.on('close', function (exitCode) {
// 		if (exitCode === 0) {
// 			callback();
// 		}
// 	});
// });
