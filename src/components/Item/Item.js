import React from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import './item.css'

export const Item = ({item}) => {
    return (
        <>
            <div className="producto">
                <Link to={`/item/${item.id}`}>
                    <img src={item.pictureUrl} className="destacada" alt="producto" />
                </Link>
                    <div className="descripcion-producto">
                        <Link to={`/item/${item.id}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p>{item.description}</p>
                        <span>${item.price}</span>
                        <ItemCount stock="5" initial="1" />
                    </div>
                
            </div>
        </>
    )
}