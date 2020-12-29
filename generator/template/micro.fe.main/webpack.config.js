const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  devServer: {
    open: true,
    port: 6060,
    clientLogLevel: 'warning',
    disableHostCheck: true,
    compress: true,
    proxy: {
      '/ids': {
        target: 'http://121.41.109.132:15088/admin',
        changeOrigin: true,
        pathRewrite: { '^/ids': '' },
      },
      '/fus': {
        target: 'http://121.40.88.181:16088',
        changeOrigin: true,
        pathRewrite: { '^/fus': '' },
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
  },
  output: {
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],
};
