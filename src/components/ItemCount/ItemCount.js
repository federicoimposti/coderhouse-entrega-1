import React, { useState, useEffect } from 'react'
import './itemcount.css'

export const ItemCount = ({stock, initial}) => {
    const [cantidad, setCantidad] = useState(initial);
    const cantidadElegida = parseInt(cantidad);

    const sumarCantidad = () => {
        if(cantidadElegida < stock) {
            setCantidad(cantidadElegida + 1);
        } else {
            alert("No hay más stock");
        }
    }

    const restarCantidad = () => {
        if(cantidadElegida > initial) {
            setCantidad(cantidadElegida - 1);
        } else {
            alert(`Cantidad mínima: ${initial}`);
        }
    }

    const OnAdd = () => {
        alert(`Cantidad elegida: ${cantidadElegida}`);
    }

    return (
            <>
                <div class="main">
                    <div className="item-count">
                        <button type="button" value="-" onClick={restarCantidad}>-</button>
                        <input value={cantidadElegida} size="1" />
                        <button type="button" value="+" onClick={sumarCantidad}>+</button>
                    </div>
                    <div class="add-to-cart">
                        <button onClick={OnAdd}>Agregar al carrito</button>
                    </div>
                </div>
            </>
    )
}