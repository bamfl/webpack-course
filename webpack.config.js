const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // npm run dev or npm run prod
  mode: 'development', // 'production'
  entry: [
		'@babel/polyfill', 
		path.resolve(__dirname, './src/js/index.js')
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // bundle[contenthash].js
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, 'dist/assets') }],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // style[contenthash].css
    }),
		new ESLintPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: path.resolve(__dirname, 'dist/сss'),
            // },
          },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  optimization: {
    // splitChunks: {
    // 	chunks: 'all'
    // },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
	// devtool: 'source-map'
};
