import React, { useState } from 'react'


const Unmount = () => {
    const [count, setCount] = useState(0)
    const fakefetch = () => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }
    return (

        <div>
            <div>
                <h1>
                    {count}
                </h1>
                <p></p>
                <button className='text-white' onClick={() => fakefetch()}>Increment</button>
            </div>

        </div>
    )
}

export default Unmount