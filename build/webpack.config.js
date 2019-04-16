const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const helpers = require('./helpers');

let umd = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		'better-jsonpath.umd': helpers.root('index.ts'),
		'better-jsonpath.umd.min': helpers.root('index.ts')
	},
	output: {
		filename: '[name].js',
		path: helpers.root('dist'),
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	target: 'web',
	module: { rules: [{ test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }] },
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				include: /\.min\.js$/,
				terserOptions: {
					ecma: 5,
					mangle: false,
					output: { comments: false }
				}
			})
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.js']
	},
	externals: [nodeExternals()]
};

module.exports = [
	umd,
	merge(umd, {
		entry: {
			'index': helpers.root('index.ts'),
			'index.min': helpers.root('index.ts')
		},
		output: { libraryTarget: 'commonjs' }
	})
];
