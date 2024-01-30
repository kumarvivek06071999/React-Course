import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

// 1. useEffect fetch data with axios
// 2. fetch data with specific id

// Async function + useEffect + Conditional Rendering

function App() {
    const [id, setId] = useState(1)
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setCards(res.data)
            } catch (error) {

            }
        }

        fetchData()

    }, [id])

    const changeInputHandler = (e) => {
        // Make a copy of a card
        const card_copy = { ...cards }
        card_copy.name = e.target.value
        setCards(card_copy)

    }

    return (
        <>

            <h1>Vite + React</h1>
            <input type="number" placeholder='Type number' value={id} onChange={(e) => setId(e.target.value)} />
            <p></p>
            <input type="text" value={cards.name || ""} onChange={(e) => changeInputHandler(e)} />
            <div className="card">

                {/* <p>
          {cards.length > 0 ? (
            cards.map((card) => (
              <span key={card.id}>{card.name}</span>
            ))
          ) : (
            'Loading...'
          )}
        </p> */}

                {/* <div>
                    {cards.length > 0 ? (

                        cards.map(card => (<p key={card.id} >
                            {card.name}
                        </p>))) : ("Loading..")}
                </div> */}

                <p>
                    {cards ? (cards.name) : ("Loading")}
                </p>

                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
