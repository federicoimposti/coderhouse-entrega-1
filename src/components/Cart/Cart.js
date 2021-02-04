import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import './cart.css'

export const Cart = () => {

    const [carrito, setCarrito, addItem, removeItems, removeItem] = useContext(CartContext);
    const [total, setTotal] = useState(0);

useEffect(() => {
    if(carrito.length){
        const precioFinalItem = carrito.map((producto) => producto.price * producto.cantidad)
        const precioFinal = precioFinalItem.reduce((accumulator, currentValue) => accumulator + currentValue)
        setTotal(precioFinal);
    }
}, [carrito])

    return (
        <div className="cart-container">
            <div className="cart">
            {carrito.length ? (
                
                <div>
                    <h2>Tu carrito</h2>
                    <table className="cart-resume">
                    <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Stock disponible</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carrito.map((producto, i) => 
                            <tr>
                                <td className="item-detail">
                                    <span className="remove-item" onClick={() => {removeItem(producto.item)}}><FaMinusCircle /> </span>
                                    <span><img src={producto.pictureUrl} /></span>
                                    <span>{producto.title}</span>
                                </td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.stock} Unidades</td>
                                <td>${producto.price}</td>
                            </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total: ${total}</td>
                        </tr>
                    </tfoot>
                    </table>
                    <div className="remove-elements" onClick={removeItems}><FaTrashAlt /> <span>Vaciar carrito</span></div>
                </div>
                ) : (<h2>Tu carrito está vacío. <Link to={`/`}>Volver a la tienda</Link></h2>)}
                
            </div>
        </div>
    )
}