import React, { useMemo, useState } from 'react'
import { Button } from 'reactstrap'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'


const MainComponent = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)
    const incrementA = () => {
        setCountA(countA + 1)
    }
    const incrementB = () => {
        setCountB(countB + 1)
    }
    const memoComponentA = useMemo(() => {
        return <ComponentA count={countA} />
    }, [countA])
    return (
        <div>
            <div>MainComponent: {countA}</div>
            <button className='button text-white' onClick={() => incrementA()} >IncrementA</button>
            <button className='button text-white' onClick={() => incrementB()} >IncrementB</button>
            {memoComponentA}
            <p></p>
            <ComponentB count={countB} />
        </div>
    )
}

export default MainComponent