module.exports = {
  output: {
    filename: '../CodeBuild/App.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  externals: {
    "FuseJS/Observable": "RequireObservable"
  }
}