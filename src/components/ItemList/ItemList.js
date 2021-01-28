import React, { useState, useEffect } from 'react'
import {Item} from '../Item/Item'
import { useParams } from 'react-router-dom'

export const ItemList = ({productsData}) => {

    const [itemCat, setItemCat] = useState();

    const itemUrlCat = useParams();

    useEffect(() =>{
        setItemCat(itemUrlCat.slug)
    }, [itemUrlCat]);

    return (
        <>
        {itemCat ? (
            productsData && productsData.filter(product => product.categoria.includes(itemCat)).map(product => <Item key={product.id} item={product} />)
        ) : (
            productsData && productsData.map(product => <Item key={product.id} item={product} />)
        )}
        </>
    )
}