const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: '.env.development'});
};

module.exports = env => {
  const isProduction = env['production--mode'] === 'production';
  let envConfig = {};
  // process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ?
  // envConfig = {
  //   'process.env': JSON.stringify(dotenv.config({path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.test'}).parsed)
  // }: 
  envConfig = {
    'process.env.TEST': JSON.stringify(process.env.TEST),
    'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
    'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    'process.env.FIREBASE_MESSAGE_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGE_SENDER_ID),
    'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
  };

  return {
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin(envConfig)
    ],
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, 
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
              loader: 'file-loader',
              options: {}
          }]
        },
        {
          test: /\.s?css$/,
          use: [ MiniCssExtractPlugin.loader, 
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
            },
            { 
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            } 
          ]
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
}

