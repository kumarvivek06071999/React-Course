import React from 'react'
import { ColorContext, NameContext } from '../App'

const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {
                                (color) => (
                                    <div>Color: {color}, Name: {name}</div>
                                )
                            }
                        </ColorContext.Consumer>
                    )

                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC