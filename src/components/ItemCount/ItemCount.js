import React, { useState } from 'react'
import swal from 'sweetalert';
import './itemcount.css'

export const ItemCount = ({stock, initial}) => {
    const [cantidad, setCantidad] = useState(initial);
    const cantidadElegida = parseInt(cantidad);

    const sumarCantidad = () => {
        if(cantidadElegida < stock) {
            setCantidad(cantidadElegida + 1);
        } else {
            swal({
                title: "Stock no disponible",
                text: `Tenemos ${stock} artículos disponibles`,
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
                text: `Cantidad mínima: ${initial} Artículo`,
                icon: "error",
            });
        }
    }

    const OnAdd = () => {
        if(cantidadElegida > stock){
            swal({
                title: "Stock no disponible",
                text: `Tenemos ${stock} artículos disponibles`,
                icon: "error",
            });
        } else if(cantidadElegida < initial) {
            swal({
                title: "Error",
                text: `Cantidad mínima: ${initial} artículo/s`,
                icon: "error",
            });
        } else {
            swal({
                title: "Elementos agregados a tu carrito",
                text: `Agregaste ${cantidadElegida} artículo/s`,
                icon: "success",
            });
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