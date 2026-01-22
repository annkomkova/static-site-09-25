console.clear()
// console.log('text')
// console.warn('_______________________')

// showHelloMessage()
// howAreYouQuestion()
// showScream()
// timesTable()
// testQuestion()
makeAsciiPineTree()

function makeAsciiPineTree() {
  //     *
  //    ***
  //   *****
  //  *******
  // *********

  let treeHeight = 10
  let starsCount, output, spaceCount

  for (let i = 0; i < treeHeight; i++) {
    starsCount = i * 2 + 1
    spaceCount = treeHeight - i

    output = ''

    for (let k = 0; k < spaceCount; k++) {
      output += ' '
    }

    for (let j = 0; j < starsCount; j++) {
      output += '*'
    }

    console.log(output)
  }
}

function testQuestion() {
  const question = prompt(
    'В каком году была принята последняя документация ECMASсript?',
    '2015'
  )
  console.log(question)
  switch (question) {
    case '2020':
      alert('поздновато')
      break
    case '1999':
      alert('рановато')
      break
    case '2015':
      alert('молодец!')
  }
}

function timesTable() {
  let cnt = 1
  const number = 2

  console.log(`Таблица умножения на ${number}`)
  while (cnt <= 10) {
    console.log(number * cnt)
    cnt += 1
  }
}

function showScream() {
  let scream = 'a'

  while (scream !== 'aaaaaaaaaaaaa') {
    console.log(scream)
    // scream = scream + 'a'
    scream += 'a'
  }

  console.log('это всё.')
}

const showModalWindowElem = document.querySelector('.showModalWindow')
showModalWindowElem.addEventListener('click', () => showModalWindow())
function showModalWindow() {
  alert('Повторяем основы JS')
}

function showHelloMessage() {
  let userName = prompt('Как тебя зовут?', 'Аня'),
    helloMessage = `Привет, ${userName}!`

  alert(helloMessage)
}

function howAreYouQuestion() {
  const howAreYou = confirm('Хорошо ли идут у тебя дела?')

  if (howAreYou) {
    alert('Рад это слышать!')
  } else {
    alert('Жаль это слышать')
  }
}

// типы данных
const text = 'текст' // строчный тип данных
const int = 80 // числовой тип
const bigInt = 234567890987654345678908765n // большие числа
const boolean = true // булевой/логический тип
const nullData = null
const undefindData = undefined
const names = [499, 'Маша', [55, true, 44], 'Вася'] //массив
const user = {
  //объект
  userName: 'Анна',
  userAge: 50
}
