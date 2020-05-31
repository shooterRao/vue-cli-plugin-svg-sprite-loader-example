const path = require('path');

module.exports = {
  pluginOptions: {
    svgSpriteLoader: {
      dir: path.resolve(__dirname, 'src/icon'),
      // test rule
      test: /\.svg$/,
      // options is svg-sprite-loader options
      // refer https://github.com/JetBrains/svg-sprite-loader#configuration
      // default options { symbolId: 'icon-[name]' }
      // if you use options,you should write symbolId
      options: {
        symbolId: 'icon-[name]'
      }
    }
  }
}