import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { NameContext, ColorContext } from '../App'
const ComponentB = () => {
    const name = useContext(NameContext)
    const color = useContext(ColorContext)
    return (
        <>
            <div>ComponentB</div>
            <div>Name: {name}, color: {color}</div>
            <ComponentC />
        </>
    )
}

export default ComponentB