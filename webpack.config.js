const path = require('path');

module.exports = {
  entry: './client/src/index.js', //where to start looking
  output: { //where to put bundle
    path: path.resolve(__dirname, 'client/dist'), //specific directory to put it
    filename: 'bundle.js' //bundle filename
  }, //put bundle at ./dist/bundle.js
  module: {
    rules: [
      {
        test: /\.jsx?$/, //which files should this loader run on? the question mark means char before it is optional, so both js and jsx.
        exclude: /(node_modules)/, //don't transpile node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] //preset-env translates es6 to es5
          }
        }
      }
    ]
  },
  mode: 'development',
};