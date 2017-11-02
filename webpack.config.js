// ES6转码和打包打包
// module.exports = {
//     entry: [
//         'babel-polyfill',
//         './app/js/index.js',
//         './app/js/index2.js',
//     ],
//     output: {
//         path: __dirname + '/dist/js',
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 loader: 'babel-loader',     // 'babel-loader'也可写成'babel'
//                 query: {
//                     presets: ['env']
//                 }
//             }
//         ]
//     }
// };




// CSS自动添加前缀并打包
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin({
	filename: './bundle.css',
	disable: false,
	allChunks: true
});
module.exports = {
	entry: {
		app: ['./app/css/css-entry.js'],
	},
	output: {
		path: __dirname + '/dist/css',
        filename: 'css.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: extractCSS.extract({
					fallback: "style-loader",
					use: ['css-loader', 'postcss-loader']
				})
			}
		]
	},
	plugins: [
		extractCSS
	]
}

