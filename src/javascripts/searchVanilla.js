import { articles } from './searchData.js'

initSearch(articles)

function initSearch(articles) {
  const input = document.querySelector('.A_SearchInput')
  const button = document.querySelector('.A_SearchButton')

  input.addEventListener('input', () => {
    hadleSearchInput(articles, input, button)
  })

  button.addEventListener('click', () => {
    hadleSearchClick(articles, input, button)
  })
}

function hadleSearchClick(articles, input, button) {
  const value = input.value.toLowerCase()

  const result = articles.find(
    (article) =>
      article.title.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
  )

  console.log(window.location)

  //!!!! для теста на локалхосте
  // window.location.href =
  //   'http://localhost:8080/' + `search.html?q=${encodeURIComponent(value)}`

  //для работы на github.pages
  window.location.href =
    'https://annkomkova.github.io/static-site-09-25/' +
    `search.html?q=${encodeURIComponent(value)}`

  if (result) {
    // window.location.href = result.url
    // window.location.href = `search.html?q=${encodeURIComponent(value)}`
  }
}

function toggleButton(button, isActive) {
  button.disabled = !isActive
}

function hadleSearchInput(articles, input, button) {
  const value = input.value.toLowerCase()
  const dropdown = document.querySelector('.C_Dropdown')

  const results = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(value) ||
      article.description.toLowerCase().includes(value)
  )

  if (results > 0) {
    dropdown.style.display = 'none'
  }

  if (value.length < 3) {
    dropdown.style.display = 'none'
    toggleButton(button, false)
  } else {
    toggleButton(button, true)
    renderDropdown(results, dropdown, value)
  }
}

function renderDropdown(results, dropdown, value) {
  dropdown.innerHTML = ''
  dropdown.style.display = 'flex'

  results.forEach((result) => {
    const item = document.createElement('a')
    item.classList.add('M_SearchResult')
    item.href = result.url

    const header = document.createElement('h5')
    header.classList.add('A_SearchResultHeader')
    header.innerHTML = hightlight(result.title, value)

    const description = document.createElement('p')
    description.classList.add('A_SearchResultDescription')
    description.innerHTML = hightlight(result.description, value)

    item.appendChild(header)
    item.appendChild(description)

    dropdown.appendChild(item)
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
