import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import './item.css'

export const Item = ({item}) => {

    const [articuloAgregado, setArticuloAgregado] = useState(0);
    const [validar, setValidar] = useState(false);
    
    const [carrito, setCarrito, addItem] = useContext(CartContext);

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
                setValidar(true);

                const cartItemObj = {
                    item: item.id,
                    cantidad: CantidadArticulos,
                    stock: item.stock,
                    title: item.title,
                    pictureUrl: item.pictureUrl,
                    price: item.price
                }

                addItem(cartItemObj);
            })
        } else {
            swal({
                title: "Sin stock",
                text: `Tenemos ${item.stock} artículos disponibles y añadiste ${articuloAgregado} a tu carrito.`,
                icon: "error",
            });
        }
    })

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