import React from 'react'
import './Navbar.css'
import InputSearch from '../InputSearch/InputSearch.jsx'
import DateComp from '../Date/Date';

const Navbar = ({ click, state, val }) => {
    return (
        <div className="navbar">
            <h1>React Weather App</h1>
            <InputSearch func={click} state={state} value={val} />
            <div className="date">
                <DateComp />
            </div>
        </div>
    )
}

export default Navbar