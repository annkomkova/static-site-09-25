import { articles } from './searchData.js'

initSearchPage(articles)

function initSearchPage(articles) {
  const input = document.querySelector('.A_SearchInput')
  const button = document.querySelector('.A_SearchButton')

  const params = new URLSearchParams(window.location.search)
  const query = params.get('q') || ''

  input.value = query

  if (query.length > 3) {
    renderResults(query, articles)
  }

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase()
    renderResults(value, articles)

    const url = `search.html?q=${encodeURIComponent(value)}`
    history.replaceState(null, '', url)
  })
}

function renderResults(value, articles) {
  const container = document.querySelector('.C_SearchResults')

  container.innerHTML = ''

  const results = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
  )

  if (results == 0) {
    container.innerHTML = `<p>Ничего не найдено</p>`
    return
  }

  results.forEach((item) => {
    const card = document.createElement('a')
    card.classList.add('O_IndexSectionCard')
    card.href = item.url

    const header = document.createElement('h3')
    header.classList.add('A_IndexH3')
    header.innerHTML = hightlight(item.title, value)

    const description = document.createElement('h3')
    description.classList.add('A_CardDescription')
    description.innerHTML = hightlight(item.description, value)

    card.appendChild(header)
    card.appendChild(description)

    container.appendChild(card)
  })
}

function hightlight(text, value) {
  const regex = new RegExp(`${value}`, 'gi')

  const formatted = text.replace(
    regex,
    `<span class="Q_Hightlight">${value}</span>`
  )

  return formatted
}
