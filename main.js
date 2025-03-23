// Угадай число
function onClickRandom() {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  let playerNumber = null

  while (true) {
    let input = prompt('Угадай число от 1 до 100')

    if (input === null) {
      alert('Игра была завершена :(')
      break
    }

    playerNumber = +input

    if (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100) {
      alert('Введи число от 1 до 100.')
      continue
    }

    if (playerNumber > randomNumber) {
      alert('Загаданное число меньше)')
    } else if (playerNumber < randomNumber) {
      alert('Загаданное число больше)')
    } else {
      alert('Ты угадал :)')
      break
    }
  }
}

//Простая арифметика
function onClickMathGame() {
  while (true) {
    const num1 = Math.floor(Math.random() * 10) + 11
    let num2 = Math.floor(Math.random() * 10) + 1
    const operations = ['+', '-', '*', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]

    if (operation === '/') {
      while (num1 % num2 !== 0) {
        num2 = Math.floor(Math.random() * 10) + 1
      }
    }

    const task = `${num1} ${operation} ${num2}`
    const correctAnswer = eval(task)

    const userInput = prompt(`Реши задачку: ${task}`)

    if (userInput === null) {
      alert('Игра была завершена :(')
      break
    }

    const userAnswer = Number(userInput)

    if (isNaN(userAnswer)) {
      alert('Введи число')
      continue
    }

    if (userAnswer === correctAnswer) {
      alert('Правильно :)')
    } else {
      alert(`Не правильно, правильный ответ: ${correctAnswer}`)
    }

    if (!confirm('Продолжаем?:)')) {
      alert('Игра была завершена :(')
      break
    }
  }
}

// Переверни текст
function reversedText() {
  const text = prompt('Введи текст, я его переверну')

  if (text === null || text.trim() === '') {
    alert('Игры была завершена :(')
    return
  }

  const reverseText = text.split('').reverse().join('')

  alert(`Твой текст наоборот: ${reverseText}`)
}

//Простая викторина
function quiz() {
  const quiz = [
    {
      question: 'Какой цвет у неба?',
      options: ['1. Красный', '2. Синий', '3. Зеленый'],
      correctAnswer: 2,
      correctText: 'Синий',
    },
    {
      question: 'Сколько дней в неделе?',
      options: ['1. Шесть', '2. Семь', '3. Восемь'],
      correctAnswer: 2,
      correctText: 'Семь',
    },
    {
      question: 'Сколько у человека пальцев на одной руке?',
      options: ['1. Четыре', '2. Пять', '3. Шесть'],
      correctAnswer: 2,
      correctText: 'Пять',
    },
  ]

  let continueGame = true

  while (continueGame) {
    let correctAnswers = 0

    for (let i = 0; i < quiz.length; i++) {
      const userInput = prompt(
        `${quiz[i].question}\n${quiz[i].options.join('\n')}`
      )

      if (userInput === null) {
        alert('Игра была завершена :(')
        return
      }

      const userAnswer = userInput.trim().toLowerCase()

      if (
        !['1', '2', '3'].includes(userAnswer) &&
        !quiz[i].correctText.toLowerCase().includes(userAnswer)
      ) {
        alert('Введи корректный ответ!')
        i--
        continue
      }

      if (
        Number(userAnswer) === quiz[i].correctAnswer ||
        userAnswer === quiz[i].correctText.toLowerCase()
      ) {
        correctAnswers++
      }
    }

    alert(
      `Ты ответил правильно на ${correctAnswers} из ${quiz.length} вопросов.`
    )

    continueGame = confirm('Хочешь сыграть снова? :)')
  }

  alert('Пока :)')
}

//Камень, ножницы, бумага

function gameRockPaperScissors() {
  const options = ['камень', 'ножницы', 'бумага']

  const inputMap = {
    1: 'камень',
    2: 'ножницы',
    3: 'бумага',
    камень: 'камень',
    ножницы: 'ножницы',
    бумага: 'бумага',
  }

  while (true) {
    const userInput = prompt(
      '1. Камень, 2. Ножницы или 3. Бумага?'
    ).toLowerCase()

    if (userInput === null) {
      alert('Игра была завершена :(')
      break
    }

    const userChoice = inputMap[userInput]

    if (!userChoice) {
      alert('Некорректный выбор.')
      continue
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)]

    let result
    if (userChoice === computerChoice) {
      result = 'Ничья!'
    } else if (
      (userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
      result = 'Ты выиграл!'
    } else {
      result = 'Ты проиграл!'
    }

    alert(`${result}
            Ты выбрал: ${userChoice}
            Я выбрал: ${computerChoice}`)

    const playAgain = confirm('Хочешь сыграть снова? :)')
    if (!playAgain) {
      alert('Пока :)')
      break
    }
  }
}

//Генератор случайных цветов

function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const colorGameButton = document.querySelector('#game6 .mini__card-btn')

colorGameButton.addEventListener('click', event => {
  event.preventDefault()

  const backgroundBlock = document.getElementById('backgroundBlock')
  if (backgroundBlock) {
    backgroundBlock.style.backgroundColor = getRandomColor()
    console.log('Новый цвет:', backgroundBlock.style.backgroundColor)
  } else {
  }
})

//================================================
document.addEventListener('DOMContentLoaded', () => {
  const navList = document.querySelector('.nav__list')
  const progressBar = document.querySelector('.nav__progress-bar')

  const cloneList = navList.cloneNode(true)
  progressBar.appendChild(cloneList)

  progressBar.style.width = `${navList.scrollWidth}px`

  progressBar.addEventListener('mouseover', () => {
    progressBar.style.animationPlayState = 'paused'
  })

  progressBar.addEventListener('mouseout', () => {
    progressBar.style.animationPlayState = 'running'
  })
})
