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
        {productsData && productsData.map(product => <Item key={product.id} item={product} />)}
        </>
    )
}