import React, { useState, useEffect } from 'react'
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './itemlistcontainer.css'
import { getFirestore } from '../../firebase/index'

export const ItemListContainer = () => {

    const [itemsData, setItemsData] = useState([]);
    const [loader, setLoader] = useState(true);
    const itemUrlCat = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        const itemsLimit = itemsCollection.limit(8);
        setLoader(true);
        if(itemUrlCat.slug === undefined){
            itemsLimit.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No hay resultados");
            }

            let items = (querySnapshot.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            }))
            setItemsData(items)
            setLoader(false);
        })
    } else {
        const filterCategory = itemsCollection.where('categoryId', '==', itemUrlCat.slug)
        setLoader(true);
        filterCategory.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log("No hay resultados");
            }

            let items = (querySnapshot.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            }))
            setItemsData(items)
            setLoader(false);
        })
    }

    }, [itemUrlCat])

    return (
        <React.Fragment>
            <div className="main-container">
                {loader ? 
                    <div className="spinner">
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                    </div> 
                        : 
                <ItemList productsData={itemsData} />}
            </div>
        </React.Fragment>
    )
}