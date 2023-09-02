import React from 'react'
import "./InputSearch.css"

const InputSearch = ({ func, state, value }) => {
    return (
        <form onSubmit={(e) => func(e)} className='search-bar'>
            <input type="text" onChange={(e) => state(e.target.value)} value={value} placeholder='Search  City...' />
            <i className='fa-solid fa-magnifying-glass'></i>
        </form>
    )
}

export default InputSearch