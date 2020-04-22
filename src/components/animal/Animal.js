import React from "react"

// When we use Animal component in AnimalList, React takes the keys passed
// to the Animal component and puts it into one object
export default ({animal, location, customer}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{animal.breed}</div>
        <div className="animal__owner">Customer Name: {customer.name}</div>
        <div className="animal__location">Checked-in at: {location.name}</div>
    </section>
)
