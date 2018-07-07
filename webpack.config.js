const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'index': [
      './ts/index.ts'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].bundle.js',
    path: path.resolve(__dirname, 'js'),
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      automaticNameDelimiter: '-',
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }]
  }
};
