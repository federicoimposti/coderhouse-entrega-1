import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import './item.css'

export const Item = ({item}) => {
    return (
        <>
            <div class="producto">
                <img src={item.pictureUrl} className="destacada" alt="producto" />
                <div class="descripcion-producto">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span>${item.price}</span>
                    <ItemCount stock="5" initial="1" />
                </div>
            </div>
        </>
    )
}