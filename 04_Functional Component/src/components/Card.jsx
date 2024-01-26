import React from 'react'

const Card = (props) => {
    return (
        <div className="relative h-[400px] w-[300px] rounded-md mt-4">
            <img
                src={props.profile}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{props.name}</h1>

                {/*  Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component's state, and changes in the state automatically update the UI */}

                <input className='px-2 py-1' type="text" value={props.name} onChange={props.onInputChangeHandler} />

                <p className="mt-2 text-sm text-gray-300">
                    {props.discription}
                </p>
                < button className=" m-1button button3" onClick={props.onClickHandler} > Change Name</button>

                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile
                </button>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Card