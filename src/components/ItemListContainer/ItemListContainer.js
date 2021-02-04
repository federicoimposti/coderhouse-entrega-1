import React, { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList'
import './itemlistcontainer.css'
import { getFirestore } from '../../firebase/index'

const productsDB = [
    {
        id: 1,
        title: "React developer",
        description: "Para amantes de esta tecnología que cambió el mundo. Remera especial para vos que te gusta programar 🤟",
        price: "2500",
        categoria: 'geek',
        stock: 7,
        pictureUrl: "https://fabrilife.com/products/designproduct5c5ec81f43712.png"
    },
    {
        id: 2,
        title: "Docker pasión",
        description: "Un DevOps no podrá resistirse a llevar con orgullo esta remera! Docker Pasión es la mejor forma de vestir tu entorno favorito.",
        price: "2600",
        categoria: 'geek',
        stock: 10,
        pictureUrl: "https://fabrilife.com/highres_products/designproduct5d239d5e8e36f.png"
    },
    {
        id: 3,
        title: "Vue way",
        description: "Si te gustan las alternativas a lo Mainstream, esta remera es para vos! Vue Way lleva este tecnología a todos lados 🤟",
        price: "2480",
        categoria: 'open-source',
        stock: 3,
        pictureUrl: "https://fabrilife.com/highres_products/designproduct5bc4779107566.png"
    }
]

export const ItemListContainer = () => {

    const [itemsData, setItemsData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const itemsLoad = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsDB);
            }, 2000);
        });
    
        itemsLoad.then((response) => {
            setItemsData(response);
            setLoader(false);
        });
    }, [])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No hay resultados");
            }
            const itemss = (querySnapshot.docs.map(doc => doc.data()));
            console.log(itemss)
        })
    }, [])

    return (
        <>
            <div className="main-container">
                {loader ? 
                    <div class="spinner">
                        <div class="cube1"></div>
                        <div class="cube2"></div>
                    </div> 
                        : 
                <ItemList productsData={itemsData} />}
            </div>
            
        </>
    )
}