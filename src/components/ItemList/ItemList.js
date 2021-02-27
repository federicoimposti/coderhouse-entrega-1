import React, { useState, useEffect } from 'react'
import {Item} from '../Item/Item'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const ItemList = ({productsData}) => {

    const [itemCat, setItemCat] = useState();

    const itemUrlCat = useParams();

    useEffect(() =>{
        setItemCat(itemUrlCat.slug)
    }, [itemUrlCat]);

    return (
        <React.Fragment>
            {productsData && productsData.length ? (
                productsData && productsData.map(product => <Item key={product.id} item={product} />)
            ) : (<div>La categoría no existe. <Link to={`/`}>Volver a la tienda.</Link></div>)}
        </React.Fragment>
    )
}