const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/main.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		assetModuleFilename: '[name][ext]',
		clean: true,
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		watchFiles: ['src/*.html'],
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpeg|jpg)$/i,
				type: 'assets/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'App Name',
			filename: 'index.html',
			template: 'src/template.html',
		}),
	],
}
