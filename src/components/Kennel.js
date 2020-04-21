import React from "react"
import Animal from "./animal/Animal"
import "./animal/Animal.css"
import Customer from "./customers/Customer"
import "./customers/Customers.css"
import Employee from "./employees/Employee"
import "./employees/Employees.css"
import "./locations/Locations.css"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>

    </>
)