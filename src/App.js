import { useState } from 'react'
import './App.css'
import Box from './component/Box'

// 1. two boxes (title, pics, result)
// 2. three buttons (rock, paper, and scissors)
// 3. if button clicked, show clicked item
// 4. computer choose random item
// 5. 3 & 4 : decide winner
// 6. change border color as result (win: green, lost: red, draw: black)

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-hand-drawn-brown-stone-illustration-image_1400699.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://media.istockphoto.com/vectors/cartoon-hand-holding-blank-piece-of-paper-illustration-vector-id1173258176',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://pixy.org/src/54/thumbs350/547045.jpg',
  },
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState('')

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return 'draw'
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose'
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose'
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose'
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomNum = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomNum]
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button
          onClick={() => {
            play('rock')
          }}
        >
          ✊🏼
        </button>
        <button
          onClick={() => {
            play('paper')
          }}
        >
          🖐🏼
        </button>
        <button
          onClick={() => {
            play('scissors')
          }}
        >
          ✌🏼
        </button>
      </div>
    </div>
  )
}

export default App
