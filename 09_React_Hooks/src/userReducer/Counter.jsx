import React, { useReducer } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
const initialState = {
    count: 0,
    // count2: 10,
}


const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + action.payload }
        case "decrement":
            return { ...state, count: state.count - action.payload }
        // case "increment by 5":
        //     return { ...state, count2: state.count2 + action.payload }
        // case "decrement by 5":
        //     return { ...state, count2: state.count2 - action.payload }
        case "reset":
            return initialState
        default:
            return state;
    }
}

const Counter = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    // here dippatch become action and count become state

    return (
        <div>
            <ButtonGroup>
                <Button className=' bg-blue-800 mx-2'>
                    {count1.count}
                </Button>
                <Button className=' bg-blue-800 mx-2'>
                    {count2.count}
                </Button>

            </ButtonGroup>
            <ButtonGroup>
                <Button className=' bg-green-800 mx-2' color="danger" onClick={() => dispatch1({ type: "increment", payload: 1 })} >
                    Increment
                </Button>

                <Button className=' bg-red-800 mx-2' onClick={() => dispatch1({ type: "decrement", payload: 1 })}>
                    Decrement
                </Button>

                <Button className=' bg-blue-800 mx-2' onClick={() => dispatch1({ type: "reset" })}>
                    Reset
                </Button>

            </ButtonGroup>

            <ButtonGroup>
                <Button className=' bg-green-800 mx-2' color="danger" onClick={() => dispatch2({ type: "increment", payload: 5 })} >
                    Increment by 5
                </Button>

                <Button className=' bg-red-800 mx-2' onClick={() => dispatch2({ type: "decrement", payload: 5 })}>
                    Decrement by 5
                </Button>

                <Button className=' bg-blue-800 mx-2' onClick={() => dispatch2({ type: "reset" })}>
                    Reset
                </Button>

            </ButtonGroup>
        </div>
    )
}

export default Counter