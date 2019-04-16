const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const helpers = require('./helpers');

let baseConfig = {
	mode: 'production',
	entry: helpers.root('index.ts'),
	output: {
		path: helpers.root('dist'),
		library: 'better-jsonpath'
	},
	module: { rules: [{ test: /\.ts$/, loader: 'ts-loader' }] },
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.js']
	},
	performance: { hints: false }
};

function configure(configs) {
	let result = [];
	for (let config of configs) {
		result.push(merge({}, baseConfig, config));
	}
	return result;
}

module.exports = configure([{
	output: {
		filename: 'better-jsonpath.umd.js',
		libraryTarget: 'umd'
	},
	target: 'web',
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
					compress: true,
					output: { comments: false }
				}
			})
		]
	}
}, {
	output: {
		filename: 'better-jsonpath.umd2.js',
		libraryTarget: 'umd2'
	},
	target: 'web',
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
					compress: true,
					output: { comments: false }
				}
			})
		]
	}
}, {
	output: {
		filename: 'better-jsonpath.commonjs2.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
					compress: true,
					output: { comments: false }
				}
			})
		]
	}
}, {
	output: {
		filename: 'better-jsonpath.commonjs.js',
		libraryTarget: 'commonjs'
	},
	target: 'node',
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
					compress: true,
					output: { comments: false }
				}
			})
		]
	}
}, {
	output: {
		filename: 'better-jsonpath.amd.js',
		libraryTarget: 'amd'
	},
	target: 'web',
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: true,
					compress: true,
					output: { comments: false }
				}
			})
		]
	}
}]);
