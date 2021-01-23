import React, { useState, useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import './itemdetailcontainer.css'

const productData =  {
        id: 123123,
        title: "React developer",
        description: "Para amantes de esta tecnología que cambió el mundo. Remera especial para vos que te gusta programar 🤟",
        price: "2500",
        pictureUrl: "https://fabrilife.com/products/designproduct5c5ec81f43712.png"
    }

export const ItemDetailContainer = () => {

    const [itemData, setitemData] = useState([]);

    useEffect(() => {
        const itemLoad = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productData);
            }, 2000);
        });
    
        itemLoad.then((response) => {
            setitemData(response);
        });
    }, [])

    return (
        <>
            <div className="main-container">
                <ItemDetail productData={itemData} />
            </div>
            
        </>
    )
}