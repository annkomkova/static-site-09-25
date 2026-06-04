const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlPages = require('./webpack.pages.js')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = [
  '/static-site-09-25/index.html',
  '/static-site-09-25/styleguide.html',
  '/static-site-09-25/search.html',
  '/static-site-09-25/pages/articles.html',
  '/static-site-09-25/pages/dictionary.html',
  '/static-site-09-25/pages/tests.html',
  '/static-site-09-25/pages/theory.html',
  '/static-site-09-25/pages/tests/test1.html',
  '/static-site-09-25/pages/articles/article1.html',
  '/static-site-09-25/pages/articles/aloe.html',
  '/static-site-09-25/pages/articles/cactus.html',
  '/static-site-09-25/pages/articles/monstera.html',
  '/static-site-09-25/pages/articles/orchidea.html',
  '/static-site-09-25/pages/articles/sansevieria.html',
  '/static-site-09-25/pages/reactBasics.html'
]

module.exports = {
  entry: {
    index: './src/javascripts/index.js',
    styleguide: './src/javascripts/styleguide.js',
    articles: './src/javascripts/articles.js',
    theory: './src/javascripts/theory.js',
    test1: './src/pages/tests/test1.js',
    basic: './src/javascripts/basic.js',
    filterTags: './src/javascripts/filterTags.js',
    searchVanilla: './src/javascripts/searchVanilla.js',
    searchModule: './src/javascripts/searchModule.js',
    reactBasics: './src/javascripts/reactBasics.jsx',
    searchReact: './src/javascripts/searchReact.jsx'
  },
  output: {
    path: path.resolve('.', 'docs'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    ...htmlPages,
    new MiniCssExtractPlugin(),

    new SitemapPlugin({
      base: 'https://annkomkova.github.io',
      paths
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/partials/footer.html'),
      location: 'footerPartial',
      template_filename: '*',
      priority: 'replace'
    }),

    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, '../src/partials/analytics.html'),
      location: 'analytics',
      template_filename: '*',
      priority: 'replace'
    })

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../src/share/CNAME'),
    //       to: path.resolve(__dirname, '../docs')
    //     }
    //   ]
    // })
  ]
}
