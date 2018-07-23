var prod = process.env.NODE_ENV === 'production'
/* 给流浪器加前缀 -webkit- */
const LessPluginAutoPrefix = require('less-plugin-autoprefix')
module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: true,
  compilers: {
    less: {
      compress: true,
      /* 给流浪器加前缀 -webkit- */
      plugins: [
        new LessPluginAutoPrefix({
          browsers: ['Android >= 2.3', 'Chrome > 20', 'iOS >= 6']
        })
      ]
    },
    /* sass: {
      outputStyle: 'compressed'
    }, */
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: [
        'babel-plugin-transform-class-properties',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {},
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
/* npm install wepy-plugin-px2units --save-dev */
/* px 转 rpx （100px === 100rpx） */
module.exports.plugins = {
  px2units: {
    filter: /\.wxss$/
  }
}
if (prod) {
  module.exports.cliLogs = false

  delete module.exports.compilers.babel.sourcesMap
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
