import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'

import './itemlistcontainer.css'

export const ItemListContainer = () => {
    return (
        <>
            <div className="main-container">
                <div>
                    <ItemCount stock="2" initial="1" />
                </div>
            </div>
            
        </>
    )
}