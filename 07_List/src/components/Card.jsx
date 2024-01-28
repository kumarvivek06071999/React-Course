import React, { Component } from 'react'


class Card extends Component {

    render() {
        console.log("Card js render")
        return (
            <div className="relative h-[400px] w-[300px] rounded-md mt-4">

                <img
                    src={this.props.profile}
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div onClick={this.props.onChangehandler} className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{this.props.name}</h1>

                    {/*  Two-way data binding allows bidirectional data flow, meaning that changes in the UI automatically update the component's state, and changes in the state automatically update the UI */}
                    <input type="text" value={this.props.name} className='  px-3 py-2' onChange={this.props.onChangeName} />

                    <p className="mt-2 text-sm text-gray-300">
                        {this.props.discription}
                    </p>
                    <button onClick={this.props.onDelete}
                        // style={this.props.btnstyle}
                        className={this.props.btnstyle.join(" ")}
                    >
                        Delete Card
                    </button>
                </div>
            </div>
        )
    }


}

export default Card