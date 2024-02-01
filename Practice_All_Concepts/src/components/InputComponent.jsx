import React from 'react'
import { useCardData } from '../context/CardContex/CardContext'

const InputComponent = ({ id, title, onchange }) => {
    const { data, PriceChangeHandler } = useCardData()


    return (

        <div>
            <input
                type="email"
                id="UserEmail"
                placeholder={title}
                value={title}
                onChange={onchange}
                className="mt-1 w-full rounded-md bg-[#242424] text-white border-gray-200 focus:border-green-800 outline-none shadow-sm sm:text-sm"
            />
        </div>
    )
}

export default InputComponent