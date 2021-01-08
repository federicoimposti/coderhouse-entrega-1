import React from 'react'
import './itemlistcontainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <div className="main-container">
            <h1>{greeting}</h1>
        </div>
    )
}