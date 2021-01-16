import React, { useState } from 'react'
import swal from 'sweetalert';
import productoImg from '../../assets/img/img1.jpg';
import './itemcount.css'

export const ItemCount = ({stock, initial}) => {
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

    const OnAdd = () => {
        if(cantidadElegida > stock){
            swal({
                title: "Sin stock",
                text: `Tenemos ${stock} artículos disponibles 😔`,
                icon: "error",
            });
        } else if(cantidadElegida < initial) {
            swal({
                title: "Error",
                text: `Cantidad mínima: ${initial} artículo/s 🤔`,
                icon: "error",
            });
        } else {
            swal({
                title: "Elementos agregados a tu carrito",
                text: `Agregaste ${cantidadElegida} artículo/s 😀`,
                icon: "success",
            });
        }
    }

    return (
            <>
                <div class="main">
                    <div class="producto">
                    <img src={productoImg} className="destacada" alt="producto" />
                    <div class="descripcion-producto">
                        <h4>Remera React</h4>
                        <p>Para amantes de esta tecnología que cambió el mundo. Remera especial para vos que te gusta programar 🤟</p>
                    </div>
                    <div className="item-count">
                        <button type="button" value="-" onClick={restarCantidad}>-</button>
                        <input value={cantidadElegida} size="1" />
                        <button type="button" value="+" onClick={sumarCantidad}>+</button>
                    </div>
                    <div class="add-to-cart">
                        <button onClick={OnAdd}>Agregar al carrito</button>
                    </div>
                    </div>
                </div>
            </>
    )
}