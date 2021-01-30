import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import './itemdetail.css'

export const ItemDetail = ({productData}) => {

    const [articuloAgregado, setArticuloAgregado] = useState(0);
    const [validar, setValidar] = useState(false);

    const onAdd = ((CantidadArticulos) => {
        if(CantidadArticulos > productData.stock){
            swal({
                title: "Sin stock",
                text: `Tenemos ${productData.stock} artículos disponibles 😔`,
                icon: "error",
            });
        } else if (CantidadArticulos < productData.minQty) {
            swal({
                title: "Error",
                text: `Cantidad mínima: ${productData.minQty} artículo/s 🤔`,
                icon: "error",
            });
        } else if ((CantidadArticulos + articuloAgregado) <= productData.stock){
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
                text: `Tenemos ${productData.stock} artículos disponibles y añadiste ${articuloAgregado} a tu carrito.`,
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
            <div className="product-detail-container">
                <div className="image-gallery-container">
                    <img src={productData && productData.pictureUrl} className="destacada" alt="producto" />
                </div> 
                <div className="item-details-container">
                    <h2 className="item-title">{productData && productData.title}</h2>
                    <span className="product-detail-price">${productData && productData.price}</span>
                    <p className="item-description">{productData && productData.description}</p>
                    <ItemCount stock={productData.stock} initial="1" agregarCarrito={onAdd} />
                    { validar && 
                    <Link to={`/cart/`}><div className="terminar-compra">Terminar mi compra</div></Link>}
                </div>
            </div>
        </>
    )
}