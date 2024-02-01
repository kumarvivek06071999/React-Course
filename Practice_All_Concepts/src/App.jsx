import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { CardContext } from './context/CardContex/CardContext'

function App() {

  const obj = [
    {
      "id": 1,
      "price": "$280,000",
      "address": "789 Maple Lane, Oakwood Heights",
      "parking": 2,
      "bathroom": 2,
      "bedroom": 3
    },
    {
      "id": 2,
      "price": "$410,000",
      "address": "567 Cedar Street, Pineville",
      "parking": 3,
      "bathroom": 2,
      "bedroom": 4
    },
    {
      "id": 3,
      "price": "$350,000",
      "address": "890 Elm Avenue, Riverbend",
      "parking": 1,
      "bathroom": 3,
      "bedroom": 3
    },
    {
      "id": 4,
      "price": "$290,000",
      "address": "123 Birch Road, Lakeside",
      "parking": 2,
      "bathroom": 2,
      "bedroom": 2
    },
    {
      "id": 5,
      "price": "$380,000",
      "address": "456 Oak Street, Hillcrest",
      "parking": 2,
      "bathroom": 3,
      "bedroom": 4
    },
    {
      "id": 6,
      "price": "$330,000",
      "address": "789 Pine Lane, Valleyview",
      "parking": 2,
      "bathroom": 2,
      "bedroom": 3
    },
    {
      "id": 7,
      "price": "$420,000",
      "address": "567 Redwood Avenue, Mountainview",
      "parking": 3,
      "bathroom": 3,
      "bedroom": 4
    },
    {
      "id": 8,
      "price": "$310,000",
      "address": "890 Walnut Street, Creekview",
      "parking": 1,
      "bathroom": 2,
      "bedroom": 3
    },
    {
      "id": 9,
      "price": "$260,000",
      "address": "123 Spruce Road, Lakeshore",
      "parking": 1,
      "bathroom": 1,
      "bedroom": 2
    },
    {
      "id": 10,
      "price": "$370,000",
      "address": "456 Cherry Avenue, Riverside",
      "parking": 2,
      "bathroom": 3,
      "bedroom": 3
    }
  ]

  const [data, setData] = useState(

    [
      {
        "id": 1,
        "price": "$280,000",
        "address": "789 Maple Lane, Oakwood Heights",
        "parking": 2,
        "bathroom": 2,
        "bedroom": 3
      },
      {
        "id": 2,
        "price": "$410,000",
        "address": "567 Cedar Street, Pineville",
        "parking": 3,
        "bathroom": 2,
        "bedroom": 4
      },
      {
        "id": 3,
        "price": "$350,000",
        "address": "890 Elm Avenue, Riverbend",
        "parking": 1,
        "bathroom": 3,
        "bedroom": 3
      },
      {
        "id": 4,
        "price": "$290,000",
        "address": "123 Birch Road, Lakeside",
        "parking": 2,
        "bathroom": 2,
        "bedroom": 2
      },
      {
        "id": 5,
        "price": "$380,000",
        "address": "456 Oak Street, Hillcrest",
        "parking": 2,
        "bathroom": 3,
        "bedroom": 4
      },
      {
        "id": 6,
        "price": "$330,000",
        "address": "789 Pine Lane, Valleyview",
        "parking": 2,
        "bathroom": 2,
        "bedroom": 3
      },
      {
        "id": 7,
        "price": "$420,000",
        "address": "567 Redwood Avenue, Mountainview",
        "parking": 3,
        "bathroom": 3,
        "bedroom": 4
      },
      {
        "id": 8,
        "price": "$310,000",
        "address": "890 Walnut Street, Creekview",
        "parking": 1,
        "bathroom": 2,
        "bedroom": 3
      },
      {
        "id": 9,
        "price": "$260,000",
        "address": "123 Spruce Road, Lakeshore",
        "parking": 1,
        "bathroom": 1,
        "bedroom": 2
      },
      {
        "id": 10,
        "price": "$370,000",
        "address": "456 Cherry Avenue, Riverside",
        "parking": 2,
        "bathroom": 3,
        "bedroom": 3
      }
    ]

  )

  return (
    <>
      <CardContext.Provider value={obj}>

        {data.map((card) => (<Card key={card.id} data={card} />))}
      </CardContext.Provider>
    </>
  )
}

export default App
