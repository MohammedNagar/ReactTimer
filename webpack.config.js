var webpack = require('webpack');

module.exports= {
  entry:[ 'babel-polyfill',
  'script-loader!jquery/dist/jquery.min.js',
  'script-loader!foundation-sites/dist/js/foundation.min.js',
  './app/app.jsx'],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  externals: {
    jquery:'jQuery'
  },
  plugins :[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      Main:'app/components/Main.jsx',
      Navigation:'app/components/Navigation.jsx',
      Timer:'app/components/Timer.jsx',
      Countdown:'app/components/Countdown.jsx',
      applicationStyles:'app/styles/app.scss'
    },
    extensions: ['*','.js','.jsx;']
  },
  module :{
    rules:[{
      loader :'babel-loader',
      query :{
        presets:['react','es2015','es2017','stage-0'],
        plugins: ['transform-runtime']
      },
      test:/\.jsx?$/,
      exclude:/(node_modules|bower_components)/
    }]
  },
  devtool: 'cheap-module-eval-source-map'
};
