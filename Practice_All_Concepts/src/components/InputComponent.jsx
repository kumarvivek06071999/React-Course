import React from 'react'
import { useContext } from 'react'
import { CardContext } from '../context/CardContex/CardContext'
const InputComponent = ({ title }) => {

    const { obj } = useContext(CardContext)
    console.log(obj)
    return (

        <div>
            <input
                type="email"
                id="UserEmail"
                placeholder={title}
                className="mt-1 w-full rounded-md bg-[#242424] text-white border-gray-200 focus:border-green-800 outline-none shadow-sm sm:text-sm"
            />
        </div>
    )
}

export default InputComponent