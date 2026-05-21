const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPage('./src/index.html', './index.html', [
    'index',
    'basic',
    'searchVanilla'
  ]),
  createPage('./src/pages/articles.ejs', './pages/articles.html', [
    'articles',
    'basic',
    'searchVanilla'
  ]),
  createPage('./src/search.html', './search.html', ['searchModule', 'basic']),
  createPage('./src/pages/dictionary.ejs', './pages/dictionary.html', [
    'index',
    'basic',
    'searchVanilla'
  ]),
  createPage('./src/pages/tests.ejs', './pages/tests.html', [
    'filterTags',
    'basic',
    'searchVanilla'
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
    'basic',
    'searchVanilla'
  ]),
  createPage('./src/pages/articles/aloe.html', './pages/articles/aloe.html', [
    'searchVanilla',
    'basic',
    'searchVanilla'
  ]),
  createPage(
    './src/pages/articles/cactus.html',
    './pages/articles/cactus.html',
    ['searchVanilla', 'basic', 'searchVanilla']
  ),
  createPage(
    './src/pages/articles/monstera.html',
    './pages/articles/monstera.html',
    ['searchVanilla', 'basic', 'searchVanilla']
  ),
  createPage(
    './src/pages/articles/orchidea.html',
    './pages/articles/orchidea.html',
    ['searchVanilla', 'basic', 'searchVanilla']
  ),
  createPage(
    './src/pages/articles/sansevieria.html',
    './pages/articles/sansevieria.html',
    ['searchVanilla', 'basic', 'searchVanilla']
  ),
  createPage('./src/pages/reactBasics.html', './pages/reactBasics.html', [
    'basic',
    'reactBasics'
  ])
]

module.exports = htmlPages
