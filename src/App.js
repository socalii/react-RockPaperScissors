import './App.css'
import Box from './component/Box'

// 1. two boxes (title, pics, result)
// 2. three buttons (rock, paper, and scissors)
// 3. if button clicked, show clicked item
// 4. computer choose random item
// 5. 3 & 4 : decide winner
// 6. change border color as result (win: green, lost: red, draw: black)

function App() {
  return (
    <div>
      <div className='main'>
        <Box title='You' />
        <Box title='Computer' />
      </div>
      <div className='main'>
        <button>✌🏼</button>
        <button>✊🏼</button>
        <button>🖐🏼</button>
      </div>
    </div>
  )
}

export default App
