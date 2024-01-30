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
                <Button color="danger" onClick={() => dispatch("increment")} >
                    Increment
                </Button>

                <Button color="warning" onClick={() => dispatch("decrement")}>
                    Decrement
                </Button>

                <Button color="success" onClick={() => dispatch("reset")}>
                    Reset
                </Button>

            </ButtonGroup>
        </div>
    )
}

export default Counter