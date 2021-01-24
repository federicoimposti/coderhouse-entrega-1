import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import './itemdetail.css'

export const ItemDetail = ({productData}) => {

    return (
        <>
            <div className="product-detail-container">
                <div className="image-gallery-container">
                    <img src={productData.pictureUrl} className="destacada" alt="producto" />
                </div> 
                <div className="item-details-container">
                    <h2 className="item-title">{productData.title}</h2>
                    <span className="product-detail-price">${productData.price}</span>
                    <p className="item-description">{productData.description}</p>
                    <ItemCount stock="5" initial="1" />
                </div>
                
            </div>
            
        </>
    )
}