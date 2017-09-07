var path = require('path')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:'./src/index',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new UglifyJSPlugin({
            parallel: {
                cache: true,
                workers: 2
            },
            sourceMap:false,
            uglifyOptions: {
                ie8: true,
                ecma: 5,
                output: {
                  comments: false,
                  beautify: false,
                },
                warnings: false
              }
        })
    ]
}