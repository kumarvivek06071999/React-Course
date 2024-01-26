import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { faker } from '@faker-js/faker'
import Card1 from './components/Card1'

function App() {
  const [card1Name, setCard1Name] = useState("Alan Walker")
  const [card2Name, setCart2Name] = useState("Tonny Wayne")
  const [showCard, setShowCard] = useState(true)
  const [cards, setCards] = useState([
    {
      id: 'asdfasf',
      name: 'Rahul Kumar',
      avatar: 'https://loremflickr.com/640/480/people?lock=1345466532888576'
    },
    {
      id: 'asdfdsfdf',
      name: 'Vivek Kumar',
      avatar: 'https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg'
    },
    {
      id: 'asdfsdfgdf',
      name: 'Sunil Kumar',
      avatar: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
    },
  ])

  const changeNameHandler = (items) => {
    setCard1Name(items)
  }

  const changeSecondCardName = (name) => {
    setCart2Name(name)
  }
  const changeInputHandler = e => setName(e.target.value)
  const toggleView = () => {
    setShowCard(!showCard)
  }

  const card2InputChanger = (evnt, id) => {
    // which index 
    const cardIndex = cards.findIndex((card) => card.id == id)

    const cardCopy2 = [...cards]

    cardCopy2[cardIndex].name = evnt.target.value

    setCards(cardCopy2)
  }

  const card2DeleteHandler = (id) => {
    const cardIndex = cards.findIndex((card) => card.id)
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }

  const dynamicbtn = {
    backgroundColor: null
  }

  if (cards.length < 3) dynamicbtn.backgroundColor = "blue"
  if (cards.length < 2) dynamicbtn.backgroundColor = "red"



  const buttonMarkup = (
    <div>
      < button className=" m-1button button3" onClick={() => changeNameHandler("Justin Beiber")} > Change Name</button>
      <button className=" m-1 button button4" onClick={() => toggleView()} >Show / Hide</button>
    </div >
  )
  const cardMarkup = (<Card
    name={card1Name}
    profile="https://loremflickr.com/640/480/people?lock=1345466532888576"
    discription={faker.lorem.sentence(10)}
    // onClickHandler={() => { changeNameHandler("Alan Walker") }}
    onInputChangeHandler={changeInputHandler}

  >
  </Card>
  )



  return (

    <div className='flex gap-3 flex-wrap justify-center items-center'>
      <h2>Cards</h2>
      {/* {buttonMarkup} */}
      {cardMarkup}
      {
        (cards.map((card) =>
          <Card1
            name={card.name}
            onchangeInput={(e) => card2InputChanger(e, card.id)}
            cardlist={cards}
            key={card.id}
            ondeletecards={() => card2DeleteHandler(card.id)}
            btnstyle={dynamicbtn}
          >Hello World</Card1>
        ))
      }

    </div>
  )
}

export default App
