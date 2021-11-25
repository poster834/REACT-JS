const path = require('path');

const MODE_ENV = process.env.MODE_ENV;
module.exports={
    entry:path.resolve(__dirname, 'src/index.jsx'),
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve:{
        extensions:['js','jsx','tsx','ts','json']
    },
    mode: MODE_ENV ? MODE_ENV : 'development',
    
   
    module: {
        rules: [
            { test:/\.[tj]sx?$/,use:['ts-loader'] },
            
        ],
    },
};