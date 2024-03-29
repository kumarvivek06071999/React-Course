import { Component } from 'react'
import './App.css'
import Card from './components/Card'
import { faker, it } from '@faker-js/faker'
import styled, { ThemeProvider, css } from 'styled-components'

const theme = {
  primary: 'blue',
  mango: 'yellow'
}

const Button = styled.button`
 border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: ${props => props.length > 2 ? "green" : props.length == 2 ? "blue" : "red"};
  cursor: pointer;
  transition: border-color 0.25s;
`

class App extends Component {
  constructor(props) {
    console.log("App jsx constructor")
    super(props)
    this.state = {
      cards: [
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
      ],
      showCard: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App js getDerivedStateFromProps", props)
    return state
  }

  // Rendering list of Cards from array of objects




  // const buttonStyle = {
  //   backgroundColor: null
  // }

  // if (cards.length < 3) { buttonStyle.backgroundColor = 'blue' }
  // if (cards.length < 2) { buttonStyle.backgroundColor = 'red' }

  // const classes = ["button"]
  // if (cards.length < 3) classes.push('blue')
  // if (cards.length < 2) classes.push('red')

  changeInputHandler = (e, id) => {
    // 1. Which card
    const cardIndex = this.state.cards.findIndex((card) => card.id == id)

    // 2. Make a copy of a card
    const cards_copy = [...this.state.cards]

    // 3. Change the name of a specific card
    cards_copy[cardIndex].name = e.target.value
    // 4. Set the cards with the latest version of card copy
    this.setState({ cards: cards_copy })
    // setCards(cards_copy)

  }

  componentDidMount() {
    console.log("App js componentDidMount")
  }
  // Conditional Rendering here 

  render() {
    console.log("App js render")
    const buttonStyle = {
      backgroundColor: null
    }

    if (this.state.cards.length < 3) { buttonStyle.backgroundColor = 'blue' }
    if (this.state.cards.length < 2) { buttonStyle.backgroundColor = 'red' }

    const classes = ["button"]
    if (this.state.cards.length < 3) classes.push('blue')
    if (this.state.cards.length < 2) classes.push('red')

    const deleteHandler = (cardIndex) => {
      // here is reference type const cards_copy = cards if you want to change original use spread operator
      const cards_copy = [...this.state.cards]
      cards_copy.splice(cardIndex, 1)
      this.setState({ cards: cards_copy })


    }

    const cardMarkup = this.state.showCard && (
      this.state.cards.map((item, index) => <Card
        key={item.id}
        name={item.name}
        profile={item.avatar}
        discription={faker.lorem.sentence(10)}
        onDelete={() => deleteHandler(index)}
        onChangeName={(e) => changeInputHandler(e, item.id)}
        btnstyle={classes}

      />)
    )


    return (
      <ThemeProvider theme={theme}>
        <>
          <h2>Cards</h2>
          <Button color='primary' length={this.state.cards.length}>Toggle</Button>
          {cardMarkup}
        </>
      </ThemeProvider>
    )
  }


}

export default App
