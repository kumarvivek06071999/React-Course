
import React, { createContext, useReducer } from 'react'
import Card1 from './useEffect fetch data from axios/Card1'
import ComponentA from './useContext/ComponentA'
import Counter from './userReducer/Counter3'
import Counter1 from './userReducer/Counter1'
import TodoList from './useReducer with useEffect/TodoList'
// Async function + useEffect + Conditional Rendering

export const NameContext = React.createContext()
export const ColorContext = React.createContext()

export const cardContext = createContext()

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

function App() {
  const [state1, dispatch1] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)

  return (
    <>
      {/* <Card1 />
      <NameContext.Provider value={"Smith"} >
        <ColorContext.Provider value={"Red"}>
          <ComponentA />
        </ColorContext.Provider>
      </NameContext.Provider> */}

      {/* <Counter /> */}

      <cardContext.Provider value={{ state1: state1.count, state2: state2.count, dispatch1, dispatch2 }}>
        <Counter1 />
      </cardContext.Provider>

      <TodoList />
    </>
  )
}

export default App
