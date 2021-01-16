import React from 'react'
import {Item} from '../Item/Item'

export const ItemList = ({productsData}) => {
    return (
        <>
            {productsData && productsData.map(product => <Item key={product.id} item={product} />)}
        </>
    )
}