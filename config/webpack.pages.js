const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', ['index', 'basic']),
  createPage('./src/pages/articles.html', './pages/articles.html', [
    'articles',
    'basic'
  ]),
  createPage('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index',
    'basic'
  ]),
  createPage('./src/pages/tests.html', './pages/tests.html', [
    'filterTags',
    'basic'
  ]),
  createPage(
    './src/pages/articles/article1.html',
    './pages/articles/article1.html',
    ['index', 'basic']
  ),
  createPage('./src/styleguide.html', './styleguide.html', [
    'styleguide',
    'basic'
  ]),
  createPage('./src/pages/theory.html', './pages/theory.html', [
    'theory',
    'basic'
  ]),
  createPage('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'test1',
    'basic'
  ]),
  createPage('./src/pages/articles/aloe.html', './pages/articles/aloe.html', [
    'searchVanilla',
    'basic'
  ]),
  createPage(
    './src/pages/articles/cactus.html',
    './pages/articles/cactus.html',
    ['searchVanilla', 'basic']
  ),
  createPage(
    './src/pages/articles/monstera.html',
    './pages/articles/monstera.html',
    ['searchVanilla', 'basic']
  ),
  createPage(
    './src/pages/articles/orchidea.html',
    './pages/articles/orchidea.html',
    ['searchVanilla', 'basic']
  ),
  createPage(
    './src/pages/articles/sansevieria.html',
    './pages/articles/sansevieria.html',
    ['searchVanilla', 'basic']
  )
]

module.exports = htmlPages
