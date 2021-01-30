import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './itemdetailcontainer.css'

const productData = [{
    id: 1,
    title: "React developer",
    description: "Para amantes de esta tecnología que cambió el mundo. Remera especial para vos que te gusta programar 🤟",
    price: "2500",
    categoria: 'geek',
    stock: 7,
    minQty: 1,
    pictureUrl: "https://fabrilife.com/products/designproduct5c5ec81f43712.png"
},
{
    id: 2,
    title: "Docker pasión",
    description: "Un DevOps no podrá resistirse a llevar con orgullo esta remera! Docker Pasión es la mejor forma de vestir tu entorno favorito.",
    price: "2600",
    categoria: 'geek',
    stock: 10,
    minQty: 1,
    pictureUrl: "https://fabrilife.com/highres_products/designproduct5d239d5e8e36f.png"
},
{
    id: 3,
    title: "Vue way",
    description: "Si te gustan las alternativas a lo Mainstream, esta remera es para vos! Vue Way lleva este tecnología a todos lados 🤟",
    price: "2480",
    categoria: 'open-source',
    stock: 3,
    minQty: 1,
    pictureUrl: "https://fabrilife.com/highres_products/designproduct5bc4779107566.png"
}]

export const ItemDetailContainer = () => {

    const [itemData, setItemData] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const itemLoad = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productData);
            }, 2000);
        });
    
        itemLoad.then((response) => {
            setItemData(response[id-1]);
        });
    })

    return (
        <>
            <div className="main-container">
                <ItemDetail productData={itemData} />
            </div>
            
        </>
    )
}