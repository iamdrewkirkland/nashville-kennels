import React from "react"


import Employee from "./employees/Employee"
import "./employees/Employees.css"
import "./locations/Locations.css"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./animal/Animal.css"
import { AnimalProvider } from "./animal/animalProvider"
import AnimalList from "./animal/AnimalList"
import "./customers/Customers.css"
import { CustomerProvider } from "./customers/customerProvider"
import CustomerList from "./customers/CustomerList"

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
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
       <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>
    </>
)