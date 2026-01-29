let currentStage = 0
let resultCount = 0
const checkboxes = document.querySelectorAll('input[type=checkbox]')

function initTest(stages) {
  const numberOfQuestion = document.querySelector('.A_NumberOfQuestion')
  const question = document.querySelector('.A_TestQuestion')
  const answers = document.querySelectorAll('.A_TestAnswerText')

  numberOfQuestion.innerHTML = `${currentStage + 1}/${stages.length}`

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
  const allTest = document.querySelector('.O_Test')
  allTest.innerHTML = ''

  const resultWrapper = document.createElement('div')
  resultWrapper.classList.add('W_ResultTest')

  const finalCount = document.createElement('p')
  finalCount.classList.add('A_FinalCount')
  finalCount.innerText = `итого: ${resultCount}`

  const resultHeader = document.createElement('h2')
  resultHeader.classList.add('A_ResultHeader')

  const resultText = document.createElement('p')
  resultText.classList.add('A_ResultText')

  const resultImg = document.createElement('img')
  resultImg.classList.add('A_ResultImg')

  resultWrapper.appendChild(finalCount)
  resultWrapper.appendChild(resultHeader)
  resultWrapper.appendChild(resultText)
  resultWrapper.appendChild(resultImg)

  allTest.appendChild(resultWrapper)

  switch (resultCount) {
    case 0:
      resultHeader.innerText = resultTable[2].header
      resultText.innerText = resultTable[2].paragraph
      resultImg.src = resultTable[2].image
      break
    case 1:
      resultHeader.innerText = resultTable[2].header
      resultText.innerText = resultTable[2].paragraph
      resultImg.src = resultTable[2].image
      break
    case 2:
      resultHeader.innerText = resultTable[1].header
      resultText.innerText = resultTable[1].paragraph
      resultImg.src = resultTable[1].image
      break
    case 3:
      resultHeader.innerText = resultTable[1].header
      resultText.innerText = resultTable[1].paragraph
      resultImg.src = resultTable[1].image
      break
    case 4:
      resultHeader.innerText = resultTable[0].header
      resultText.innerText = resultTable[0].paragraph
      resultImg.src = resultTable[0].image
      break
  }
}

export { initTest, chooseAnswer }
