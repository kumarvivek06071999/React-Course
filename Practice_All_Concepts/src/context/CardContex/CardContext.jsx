import { createContext, useContext, useState } from "react";

const CardContext = createContext()

export const CardProvider = ({ children }) => {

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

    const extraData = [

    ]



    const PriceChangeHandler = (id, evnt) => {
        const cardIndex = data.findIndex((card) => card.id == id)
        const dataCopy = [...data]
        dataCopy[cardIndex].price = evnt.target.value
        setData(dataCopy)

    }
    const AdressChangeHander = (id, evnt) => {
        const cardIndex = data.findIndex((card) => card.id == id)
        const dataCopy = [...data]
        dataCopy[cardIndex].address = evnt.target.value
        setData(dataCopy)

    }
    const ParkingNumberHandler = (id, evnt) => {
        const cardIndex = data.findIndex((card) => card.id == id)
        const dataCopy = [...data]
        dataCopy[cardIndex].parking = evnt.target.value
        setData(dataCopy)

    }
    const BathroomNumberHander = (id, evnt) => {
        const cardIndex = data.findIndex((card) => card.id == id)
        const dataCopy = [...data]
        dataCopy[cardIndex].bathroom = evnt.target.value
        setData(dataCopy)

    }
    const BedroomNumberHandler = (id, evnt) => {
        const cardIndex = data.findIndex((card) => card.id == id)
        const dataCopy = [...data]
        dataCopy[cardIndex].bedroom = evnt.target.value
        setData(dataCopy)

    }


    const ContextData = {
        data,
        setData,
        PriceChangeHandler,
        AdressChangeHander,
        ParkingNumberHandler,
        BathroomNumberHander,
        BedroomNumberHandler,
    }


    return (
        <CardContext.Provider value={ContextData} >
            {children}
        </CardContext.Provider>
    )

}

export const useCardData = () => { return useContext(CardContext) }

export default CardContext
