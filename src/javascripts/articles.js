import '../stylesheets/articles.css'

// подключение свайпера для анимации галереи
const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// подключение базы данных через airtable для вывода карточек-тизеров

import Airtable from 'airtable'

const token =
  'pat2XLtnHSVnrRRIt.59eee9778eb19008a9a436caee222174cc418596cb9b0ecea3f860e3ba067a70'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appkYbzcVO88mbM6g')

let content
getArtcilesTeasers().then((data) => {
  content = data

  createArticlesTeasersCards(content)
})

function getArtcilesTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('articles cards')
      .select({
        maxRecords: 100
      })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            link: record.fields['URL'],
            image: record.fields['Image']
          })
        })
        resolve(content)
      })
  })
}

function createArticlesTeasersCards(content) {
  content.forEach((stroke) => {
    let { title, description, tags, link, image } = stroke

    const articleHeader = document.createElement('h3')
    articleHeader.classList.add('A_IndexH3')
    articleHeader.innerText = title

    // const articleText = document.createElement('p')
    // articleText.classList.add('A_IndexText')
    // articleText.innerText = description

    const articleTags = document.createElement('div')
    articleTags.classList.add('C_IndexSectionCardTags')

    tags.forEach((tag) => {
      const articleTag = document.createElement('span')
      articleTag.classList.add('A_IndexSectionCardTag')
      articleTag.innerText = tag

      articleTags.appendChild(articleTag)
    })

    const articleCard = document.createElement('a')
    articleCard.classList.add('O_IndexSectionCard')
    articleCard.href = link
    articleCard.style.backgroundImage = `url(${image})`

    articleCard.appendChild(articleHeader)
    // articleCard.appendChild(articleText)
    articleCard.appendChild(articleTags)

    document.querySelector('.O_Articles').appendChild(articleCard)
  })
}
