import React, { useState } from 'react'
import swal from 'sweetalert';
import './itemcount.css'

export const ItemCount = ({stock, initial, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(initial);
    const cantidadElegida = parseInt(cantidad);

    const sumarCantidad = () => {
        if(cantidadElegida < stock) {
            setCantidad(cantidadElegida + 1);
        } else {
            swal({
                title: "Sin stock",
                text: `Tenemos ${stock} artículos disponibles 😔`,
                icon: "error",
            });
        }
    }

    const restarCantidad = () => {
        if(cantidadElegida > initial) {
            setCantidad(cantidadElegida - 1);
        } else {
            swal({
                title: "Error",
                text: `Cantidad mínima: ${initial} artículo/s 🤔`,
                icon: "error",
            });
        }
    }

    return (
            <React.Fragment>
                <div className="item-count">
                    <button type="button" defaultValue="-" onClick={restarCantidad}>-</button>
                    <span className="itemscount" size="1">{cantidadElegida}</span>
                    <button type="button" defaultValue="+" onClick={sumarCantidad}>+</button>
                </div>
                <div className="add-to-cart">
                    <button onClick={() => {agregarCarrito(cantidadElegida)}}>Agregar al carrito</button>
                </div>
            </React.Fragment>
    )
}