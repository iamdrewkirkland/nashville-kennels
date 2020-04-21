import React, { useContext } from "react"

import "./Animal.css"
import { AnimalContext } from "./animalProvider"
import Animal from "./Animal"

export default () => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
        {
            animals.map(animal => <Animal key={animal.id} animal={animal} />)
        }
        </div>
    )
}