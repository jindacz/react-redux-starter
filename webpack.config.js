// 这个项目中需要把ES6、JSX转换为浏览器可运行的ES5语法，所以我们需要使用webpack及其babel-loader来进行转换、打包。这里我们默认index.jsx是入口文件。

// webpack.config.js
module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};
