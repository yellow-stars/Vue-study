const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //开启代理服务器
  //方式一
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }
  //方式二
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''},
        // ws:true,用于支持websocket
        // changeOrigin:true,//默认为true
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        // ws:true,用于支持websocket
        // changeOrigin:true,//默认为true
      },
    }
    
  }
})
