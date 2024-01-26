import React from 'react'
import { useState } from 'react'

const Card1 = (props) => {
    const [showCard, setShowCard] = useState(true)

    const cardMarkup = showCard && (

        <a href="#" className="group relative block bg-black">
            <img
                alt="Developer"
                src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                <p className="text-xl font-bold text-white sm:text-2xl">{props.name}</p>
                <input type="text" value={props.name} className=' text-white px-2 py-1' onChange={props.onchangeInput} />
                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                            quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </a>)

    const toggleView = () => {
        setShowCard(!showCard)
    }


    return (
        <div className=' w-2/6 mt-4'>
            <div>
                < button className=" m-1button button3" onClick={props.ondeletecards} > Delete Card</button>
                <button className=" m-1 button button4" onClick={() => toggleView()} >Show / Hide</button>
            </div >

            {cardMarkup}

            {props.children}


        </div>
    )
}

export default Card1