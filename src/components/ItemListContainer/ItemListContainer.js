import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {ItemCountBeta} from '../ItemCountBeta/ItemCountBeta'

import './itemlistcontainer.css'

export const ItemListContainer = () => {
    return (
        <>
            <div className="main-container">
                <div>
                <ItemCount stock="5" initial="1" />
                <ItemCountBeta stock="4" initial="1" />
                </div>
            </div>
            
        </>
    )
}