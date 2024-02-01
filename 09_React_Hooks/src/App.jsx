
import React from 'react'
import Card1 from './useEffect fetch data from axios/Card1'
import ComponentA from './useContext/ComponentA'
import Counter from './userReducer/Counter'
import Counter1 from './userReducer/Counter1'
// Async function + useEffect + Conditional Rendering

export const NameContext = React.createContext()
export const ColorContext = React.createContext()

function App() {

  return (
    <>
      {/* <Card1 />
      <NameContext.Provider value={"Smith"} >
        <ColorContext.Provider value={"Red"}>
          <ComponentA />
        </ColorContext.Provider>
      </NameContext.Provider> */}

      {/* <Counter /> */}
      <Counter1 />
    </>
  )
}

export default App
