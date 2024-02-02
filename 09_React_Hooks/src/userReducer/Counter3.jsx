import React, { useContext, useReducer } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import Counter2 from './Counter2'
import { cardContext } from '../App'
const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + action.payload }
        case "decrement":
            return { ...state, count: state.count - action.payload }
        case "reset":
            return initialState

        default:
            state;
    }
}


const Counter3
    = () => {
        const useCounterContext = useContext(cardContext)
        const { state1, state2, dispatch1, dispatch2 } = useCounterContext

        // const [state1, dispatch1] = useReducer(reducer, initialState)
        // const [state2, dispatch2] = useReducer(reducer, initialState)

        return (
            <div>
                <ButtonGroup className=' my-3'>
                    <Button className=' bg-blue-700 mx-3'>{state1}</Button>
                    <Button className='bg-blue-700 mx-3'>{state2}</Button>
                </ButtonGroup>

                <ButtonGroup className='my-3'>
                    <Button className=' bg-green-700 mx-3' onClick={() => dispatch1({ type: "increment", payload: 2 })} >Increment by 2</Button>
                    <Button className='bg-red-700 mx-3' onClick={() => dispatch1({ type: "decrement", payload: 2 })}>Decrement by 2</Button>
                    <Button className='bg-red-700 mx-3' onClick={() => dispatch1({ type: "reset", })}>Reset</Button>
                </ButtonGroup>
                <ButtonGroup className='my-3'>
                    <Button className=' bg-green-700 mx-3' onClick={() => dispatch2({ type: "increment", payload: 5 })} >Increment by 5</Button>
                    <Button className='bg-red-700 mx-3' onClick={() => dispatch2({ type: "decrement", payload: 5 })}>Decrement by 5</Button>
                    <Button className='bg-red-700 mx-3' onClick={() => dispatch2({ type: "reset", })}>Reset</Button>
                </ButtonGroup>

                {/* <Counter2 /> */}

            </div>
        )
    }

export default Counter3
