import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import './item.css'

export const Item = ({item}) => {

    const [articuloAgregado, setArticuloAgregado] = useState(0);
    const [validar, setValidar] = useState(false);

    const onAdd = ((CantidadArticulos) => {
        if(CantidadArticulos > item.stock){
            swal({
                title: "Sin stock",
                text: `Tenemos ${item.stock} artículos disponibles 😔`,
                icon: "error",
            });
        } else if (CantidadArticulos < item.minQty) {
            swal({
                title: "Error",
                text: `Cantidad mínima: ${item.minQty} artículo/s 🤔`,
                icon: "error",
            });
        } else if ((CantidadArticulos + articuloAgregado) <= item.stock){
            swal({
                title: "Elementos agregados a tu carrito",
                text: `Agregaste ${CantidadArticulos} artículo/s 😀`,
                icon: "success",
            }).then(() => {
                setArticuloAgregado(CantidadArticulos + articuloAgregado);
                setValidar(true);
                
            })
        } else {
            swal({
                title: "Sin stock",
                text: `Tenemos ${item.stock} artículos disponibles y añadiste ${articuloAgregado} a tu carrito.`,
                icon: "error",
            });
        }
    })

    useEffect(() => {
        if(articuloAgregado){
        swal({
            title: "Artículos en carrito",
            text: `Tenes ${articuloAgregado} artículo/s en tu carrito 😀`,
            icon: "warning",
        })
    }
    },[articuloAgregado]);

    return (
        <>
            <div className="producto">
                <Link to={`/item/${item.id}`}>
                    <img src={item.pictureUrl} className="destacada" alt="producto" />
                </Link>
                    <div className="descripcion-producto">
                        <Link to={`/item/${item.id}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p>{item.description}</p>
                        <span>${item.price}</span>
                        <ItemCount stock={item.stock} initial="1" agregarCarrito={onAdd} />
                        { validar && 
                        <Link to={`/cart/`}><div className="terminar-compra">Terminar mi compra</div></Link>}
                    </div>
                
            </div>
        </>
    )
}