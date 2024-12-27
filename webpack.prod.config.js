const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css
const TerserPlugin = require('terser-webpack-plugin') // 压缩js
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清除dist目录，由于使用 contenhash，所以代码变化每次 build 都会生成新的 js 文件
/** 用于生成一个 HTML 文件作为 WEB 应用程序的入口 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    img: './src/img.js',
  },
  output: {
    // [contenthash] 代表文件内容的 hash 值,目的是使用浏览器缓存
    filename: '[name].[contenthash].js',
    path: __dirname + '/dist',

    // publicPath 默认值是 auto，会自动判断，这个主要是用来解决图片等资源路径问题
    // publicPath: 'auto',
    // 同样也可以设置 CDN 目录
    // publicPath: 'http://some-cdn.com/',
    // publicPath: 'dist/',
    publicPath: '', // 当使用 HtmlWebpackPlugin 时，publicPath 应该设置为空字符串
  },
  mode: 'production',
  // optimization 是一个配置选项，用于优化打包输出的代码
  optimization: {
    // splitChunks 是一个配置选项，用于动态分割代码
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // 必须要有的，不然打包的时候会报错，你可以理解成，我想导入一张图片，以怎样的规则来导入
      {
        test: /\.(png|jpg)$/,
        // type: 'asset/resource',
        // asset/inline 是为了解决当有很多张图片的时候，减少 HTTP 请求数量，提高页面加载速度，但是会造成体积变大，所以这个只适用小型资源
        // type: 'asset/inline',

        // 这个 asset 一般是和下面的 dataUrlCondition 一起使用，如果图片大小超过 4 kb，就会使用 dataUrl 来表示该资源文件，否则跟 resource 一样，输出单独的文件
        type: 'asset', // 默认值
        // 一个选项，它用于配置资源模块的解析行为。
        parser: {
          // 用于决定是否将资源文件转换为 Data URL（一种将资源文件内容编码为 Base64 的 URL 格式）
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
      {
        // $ 表示结束，匹配所有 .css 结尾的文件
        // css-loader 解析 styles.css 文件，处理其中的@import和url()。
        // style-loader 将解析后的CSS内容插入到HTML文档的<head>部分，使得样式生效。
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      chunks: ['index'],
      filename: 'indexs.html',
      meta: {
        description: 'hello webpack',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'hello webpack-img',
      chunks: ['img'],
      filename: 'index-img.html',
      meta: {
        description: 'hello webpack-img',
      },
    }),
  ],
}
