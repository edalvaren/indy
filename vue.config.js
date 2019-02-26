const path = require("path");

module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src/'),
                "components": path.resolve(__dirname, 'src/components/'),
                "controls" : path.resolve(__dirname, 'src/components/controls/'),
            }
        }
    },
};