import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { faker } from '@faker-js/faker'

function App() {
  const [name, setName] = useState("Alan Walker")
  const [showCard, setShowCard] = useState(true)

  const changeNameHandler = (items) => {
    setName(items)
  }
  const changeInputHandler = e => setName(e.target.value)
  const toggleView = () => {
    setShowCard(!showCard)
  }
  const buttonMarkup = (
    <div>
      < button className=" m-1button button3" onClick={() => changeNameHandler("Justin Beiber")} > Change Name</button>
      <button className=" m-1 button button4" onClick={() => toggleView()} >Show / Hide</button>
    </div >
  )
  // Conditional Rendering here 
  const cardMarkup = (showCard && <Card name={name}
    profile="https://loremflickr.com/640/480/people?lock=1345466532888576"
    discription={faker.lorem.sentence(10)}
    onClickHandler={() => { changeNameHandler("Alan Walker") }}
    onInputChangeHandler={changeInputHandler}
  >
  </Card>
  )



  return (

    <>
      <h2>Cards</h2>
      {buttonMarkup}
      {cardMarkup}
    </>
  )
}

export default App
