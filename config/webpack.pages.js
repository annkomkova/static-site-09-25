const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index']),
  createPage('./src/pages/articles.html', './pages/articles.html', ['index']),
  createPage('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index'
  ]),
  createPage('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ]),
  createPage(
    './src/pages/articles/article1.html',
    './pages/articles/article1.html',
    ['index']
  ),
  createPage('./src/styleguide.html', './styleguide.html', ['styleguide'])
]

module.exports = htmlPages
