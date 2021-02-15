import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { FaMinusCircle, FaArrowCircleRight, FaTrashAlt } from "react-icons/fa";
import './cart.css'

export const Cart = () => {

    const [carrito, setCarrito, addItem, removeItems, removeItem] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const [order, setOrder] = useState({});
    const [orderId, setOrderId]  = useState('');

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
                                    <span><img key={producto.pictureUrl} src={producto.pictureUrl} /></span>
                                    <span key={producto.title}>{producto.title}</span>
                                </td>
                                <td key={producto.cantidad}>{producto.cantidad}</td>
                                <td key={producto.stock}>{producto.stock} Unidades</td>
                                <td key={producto.price}>${producto.price}</td>
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
                    <div className="bottom-controls">
                        <div className="remove-elements" onClick={removeItems}><FaTrashAlt /> <span>Vaciar carrito</span></div>
                        <Link to={`/checkout/`}><div className="checkout-button"><span>Finalizar Compra </span><FaArrowCircleRight /></div></Link>
                    </div>
                </div>
                ) : (<h2>Tu carrito está vacío. <Link to={`/`}>Volver a la tienda</Link></h2>)}
                
            </div>
        </div>
    )
}