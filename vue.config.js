const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src/'),
                "components": path.resolve(__dirname, 'src/components/'),
                "controls" : path.resolve(__dirname, 'src/components/controls/'),
            }
        },
        plugins: [
            new UglifyJsPlugin({
              sourceMap: true,
              uglifyOptions: {
                  ecma: 8,
                  compress: {
                      warnings: false
                  }
              }
            })
        ]
    },
};