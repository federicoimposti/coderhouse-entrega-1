import React, { useState } from 'react'
import './itemcountbeta.css'

export const ItemCountBeta = ({stock, initial}) => {
    const [cantidad, setCantidad] = useState(initial);
    const cantidadElegida = parseInt(cantidad);

    const sumarCantidad = () => {
        setCantidad(cantidadElegida + 1);
    }

    const restarCantidad = () => {
        setCantidad(cantidadElegida - 1);
    }

    const OnAdd = () => {
        if((cantidadElegida < stock) && (cantidadElegida >= initial)){
            alert(`Cantidad elegida: ${cantidadElegida}`);
        }
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