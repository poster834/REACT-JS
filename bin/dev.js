const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const nodemon = require('nodemon');
const path = require('path');

compiler.run((err) =>{
    if (err) {
        console.log('Compilation Error: ',err);
    }

    compiler.watch({}, (err)=>{
        if (err) {
            console.log('Compilation Error: ',err);
        }
        console.log('Compilation - OK!: ');
    });

nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
        path.resolve(__dirname, '../dist/server'),
        path.resolve(__dirname, '../dist/client'),
]
})
});