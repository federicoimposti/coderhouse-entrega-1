import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {ItemCountBeta} from '../ItemCountBeta/ItemCountBeta'

import './itemlistcontainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="main-container">
                <div>
                <ItemCount stock="10" initial="1" />
                <ItemCountBeta stock="14" initial="3" />
                </div>
            </div>
            
        </>
    )
}