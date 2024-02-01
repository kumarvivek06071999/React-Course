import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import { useCardData } from './context/CardContex/CardContext'


function App() {

  const { data } = useCardData()

  return (

    <>
      {data.map((card) => (<Card key={card.id} data={card} />))}
    </>

  )
}

export default App
