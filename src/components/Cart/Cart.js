import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import './cart.css'

export const Cart = () => {

    const [carrito, setCarrito, addItem, removeItems, removeItem] = useContext(CartContext);

    return (
        <div className="cart-container">
            <div className="cart">
            {carrito.length ? (
                
                <div>
                    <h2>Tu carrito</h2>
                    <div className="item-description-column">
                        <h3>Item</h3>
                        <h3>Cantidad</h3>
                        <h3>Stock</h3>
                    </div>
                    <ul>
                        {carrito.map((producto, i) => 
                            <li className="item-row">
                                <div className="item-detail">
                                    <span className="remove-item" onClick={() => {removeItem(producto.item)}}><FaMinusCircle /> </span>
                                    <span><img src={producto.pictureUrl} /></span>
                                    <span>{producto.title}</span>
                                </div>
                                <div>{producto.cantidad}</div>
                                <div>{producto.stock}</div>
                            </li>
                            )
                        }
                    </ul>
                    <div className="remove-elements" onClick={removeItems}><FaTrashAlt /> <span>Vaciar carrito</span></div>
                </div>
                ) : (<h2>Tu carrito está vacío.</h2>)}
                
            </div>
        </div>
    )
}