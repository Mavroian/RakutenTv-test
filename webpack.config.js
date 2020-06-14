const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
  return {
    entry: './src/App.jsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public')
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: path.join(__dirname, 'public')
          },
        }, 'css-loader'
        ],
        test: /\.css/
      }]
    },
    mode: env ? 'production' : 'development',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      proxy: {
        '/': 'http://localhost:3000/',
        '/:type/:movies': 'http://localhost:3000/:type/:movies',
        '/:type/:movies/trailer': 'http://localhost:3000/:type/:movies/trailer',
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css',
        chunkFilename: 'main.css',
      })]
  }
};