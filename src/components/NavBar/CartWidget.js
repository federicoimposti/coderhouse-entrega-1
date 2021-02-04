import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import './cartwidget.css'
import { FaShoppingBag } from "react-icons/fa";

export const CartWidget = () => {

    const [carrito] = useContext(CartContext);
    const [itemsQty, setitemsQty] = useState(0);

useEffect(() => {
    if(carrito.length){
        const cantidadItem = carrito.map((producto) => producto.cantidad)
        const cantidadTotal = cantidadItem.reduce((accumulator, currentValue) => accumulator + currentValue)
        setitemsQty(cantidadTotal);
    }
}, [carrito])

    return (
        <div className="cart-widget">
            <FaShoppingBag />
            {carrito.length ? (
                <div className="cart-qty">{itemsQty}</div>
                ) : (null)
            }
        </div>
    )
}