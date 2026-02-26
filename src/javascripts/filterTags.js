initFilter()

function initFilter() {
  const tags = document.querySelectorAll('.A_FilterTag')
  const allTag = document.querySelector('.A_FilterTag.all')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (tag != allTag) {
        allTag.classList.remove('active')
        tag.classList.toggle('active')

        filterByTag()
      }

      let activeTags = document.querySelectorAll('.A_FilterTag.active')

      if (
        (tag == allTag && !tag.classList.contains('active')) ||
        tags.length - 1 == activeTags.length ||
        activeTags.length == 0
      ) {
        activeTags.forEach((activeTag) => {
          activeTag.classList.remove('active')
        })

        allTag.classList.add('active')

        showAllCards()
      }
    })
  })
}

function filterByTag() {
  const cards = document.querySelectorAll('.O_IndexSectionCard')
  let activeTags = document.querySelectorAll('.A_FilterTag.active')
  let cnt
  let tagList = []

  cards.forEach((card) => {
    card.style.display = 'none'
  })

  activeTags.forEach((activeTag) => {
    let classList = activeTag.className.split(' ')
    classList = classList.sort()
    cnt = 1

    if (classList[1] == 'active') {
      cnt++
    }

    for (let i = cnt; i < classList.length; i++) {
      tagList.push(classList[i])
    }

    tagList.forEach((tagName) => {
      cards.forEach((card) => {
        if (card.classList.contains(tagName)) {
          card.style.display = 'flex'
        }
      })
    })
  })
}

function showAllCards() {
  const cards = document.querySelectorAll('.O_IndexSectionCard')
  let activeTags = document.querySelectorAll('.A_FilterTag.active')

  cards.forEach((card) => {
    card.style.display = 'flex'
  })
}
