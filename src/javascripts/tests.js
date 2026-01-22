let currentStage = 0
let resultCount = 0
const checkboxes = document.querySelectorAll('input[type=checkbox]')

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
  const question = document.querySelector('.A_TestQuestion')
  const answers = document.querySelectorAll('.A_TestAnswerText')

  numberOfQuestion.innerHTML = `вопрос №${currentStage + 1} из ${stages.length}`

  question.innerHTML = stages[currentStage].question

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text
  }

  for (let j = 0; j < checkboxes.length; j++) {
    checkboxes[j].dataset.count = stages[currentStage].answers[j].count
  }
}

function chooseAnswer(stages, resultTable) {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count)

        setTimeout(() => {
          updateStage(stages, resultTable)
          checkbox.checked = false
        }, 300)
      }
    })
  })
}

function updateStage(stages, resultTable) {
  if (currentStage + 1 < stages.length) {
    currentStage++
    initTest(stages)
  } else {
    showResult(resultTable)
  }
}

function showResult(resultTable) {
  const allTest = document.querySelector('.S_Test')
  allTest.innerHTML = ''

  const finalCount = document.createElement('p')
  finalCount.classList.add('A_FinalCount')
  finalCount.innerText = `итого: ${resultCount}`

  const resultHeader = document.createElement('h2')
  resultHeader.classList.add('A_ResultHeader')

  const resultText = document.createElement('p')
  resultText.classList.add('A_ResultText')

  allTest.appendChild(finalCount)
  allTest.appendChild(resultHeader)
  allTest.appendChild(resultText)

  switch (resultCount) {
    case 0:
      resultHeader.innerText = resultTable[2].header
      resultText.innerText = resultTable[2].paragraph
      break
    case 1:
      resultHeader.innerText = resultTable[2].header
      resultText.innerText = resultTable[2].paragraph
      break
    case 2:
      resultHeader.innerText = resultTable[1].header
      resultText.innerText = resultTable[1].paragraph
      break
    case 3:
      resultHeader.innerText = resultTable[1].header
      resultText.innerText = resultTable[1].paragraph
      break
    case 4:
      resultHeader.innerText = resultTable[0].header
      resultText.innerText = resultTable[0].paragraph
      break
  }
}

export { initTest, chooseAnswer }
