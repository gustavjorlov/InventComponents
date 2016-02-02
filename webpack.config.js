'use strict';

var webpack = require('webpack');

module.exports = {
	entry: ["./app.js"],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
			    test: /\.html$/,
			    exclude: /node_modules/,
			    loader: 'mustache'
			    // loader: 'mustache?minify'
			    // loader: 'mustache?{ minify: { removeComments: false } }'
			    // loader: 'mustache?noShortcut'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	jshint: {
		esversion: 6,
		curly: true
	},
	output: {
		filename: "dist/bundle.js"
	},
	resolve: { //which files can we process without specifically giving them a file extension
		extensions: ['', '.js', '.es6']
	},
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
};