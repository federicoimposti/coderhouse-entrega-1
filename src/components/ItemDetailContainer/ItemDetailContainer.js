import React, { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/index'
import './itemdetailcontainer.css'

export const ItemDetailContainer = () => {

    const [itemData, setItemData] = useState([]);
    const {id} = useParams()
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        const item = itemsCollection.doc(id)
        item.get().then((doc) => {
            if(doc.size === 0){
                console.log("No hay resultados");
            }
            setItemData({id: doc.id, ...doc.data()})
            setLoader(false);
        })
    }, [id])

    return (
        <>
            <div className="main-container">
                {loader ? 
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div> 
                        : 
                <ItemDetail productData={itemData} />}
            </div>
            
        </>
    )
}