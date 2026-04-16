initSearch()
console.log('test')

function initSearch() {
  const articles = [
    {
      title: 'Монстера',
      description: 'Тропическое растение с крупными листьями',
      url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/monstera.html'
    },
    {
      title: 'Кактус',
      description: 'Пустынное растение без частого полива',
      url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/cactus.html'
    },
    {
      title: 'Сансевиерия',
      description: 'Теневыносливый суккулент, не требующий частого полива',
      url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/sansevieria.html'
    },
    {
      title: 'Орихидея',
      description: 'Красивое цветущее растение, растущее во мху',
      url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/orchidea.html'
    },
    {
      title: 'Алоэ',
      description:
        'Суккулент, не требующий частого полива, с лекарственными свойствами',
      url: 'https://annkomkova.github.io/static-site-09-25/pages/articles/aloe.html'
    }
  ]

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

  if (result) {
    window.location.href = result.url
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
    header.innerText = result.title

    const description = document.createElement('p')
    description.classList.add('A_SearchResultDescription')
    description.innerText = result.description

    item.appendChild(header)
    item.appendChild(description)

    dropdown.appendChild(item)
  })
}
