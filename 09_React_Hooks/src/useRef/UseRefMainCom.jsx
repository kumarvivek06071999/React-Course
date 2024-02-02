import React, { useRef, useState } from 'react'
import { Input } from 'reactstrap'
import Unmount from './Deal with unmount/Unmount'

const UseRefMainCom = () => {
    const inputRef = useRef()
    const [show, setShow] = useState(true)
    return (
        <div>
            <input type="text" ref={inputRef} />
            <input type="text" />
            <input type="text" />
            <button className='text-white' onClick={() => {
                inputRef.current.focus()
            }}>Focus</button>
            <p></p>
            <button className='text-white' onClick={() => setShow(!show)} >Toggle</button>
            {show && <Unmount />
            }
        </div>
    )
}

export default UseRefMainCom