import React, { useReducer } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
            break;

        default:
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    // here dippatch become action and count become state

    return (
        <div>
            <div>{count}</div>
            <ButtonGroup>
                <Button className=' bg-green-800 mx-2' color="danger" onClick={() => dispatch("increment")} >
                    Increment
                </Button>

                <Button className=' bg-red-800 mx-2' onClick={() => dispatch("decrement")}>
                    Decrement
                </Button>

                <Button className=' bg-blue-800 mx-2' onClick={() => dispatch("reset")}>
                    Reset
                </Button>

            </ButtonGroup>
        </div>
    )
}

export default Counter