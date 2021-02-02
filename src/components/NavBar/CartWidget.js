import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import './cartwidget.css'
import { FaShoppingBag } from "react-icons/fa";

export const CartWidget = () => {

    const [carrito] = useContext(CartContext);

    return (
        <div className="cart-widget">
            <FaShoppingBag />
            {carrito.length ? (
                <div className="cart-qty">{carrito.length}</div>
                ) : (null)
            }
        </div>
    )
}