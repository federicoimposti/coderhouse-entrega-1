import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import './itemdetail.css'

export const ItemDetail = ({productData}) => {

    const [articuloAgregado, setArticuloAgregado] = useState(0);
    const [validar, setValidar] = useState(false);
    const [carrito, setCarrito, addItem, removeItems, removeItem] = useContext(CartContext);

    const onAdd = ((CantidadArticulos) => {

        const cartItemObj = {
            item: productData.id,
            cantidad: CantidadArticulos,
            stock: productData.stock,
            title: productData.title,
            pictureUrl: productData.pictureUrl,
            price: productData.price,
        }

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
        } else {
            setArticuloAgregado(CantidadArticulos + articuloAgregado);
            addItem(cartItemObj);
            setValidar(true);
        }
    })

    return (
        <React.Fragment>
        { productData && productData.title ? (
            <div className="product-detail-container">
                    <div className="image-gallery-container">
                        <img src={productData.pictureUrl} className="destacada" alt="producto" />
                    </div> 
                    <div className="item-details-container">
                        <h2 className="item-title">{productData.title}</h2>
                        <span className="product-detail-price">${productData.price}</span>
                        <p className="item-description">{productData.description}</p>
                        <ItemCount stock={productData.stock} initial="1" agregarCarrito={onAdd} />
                        { validar && 
                        <Link to={`/cart/`}><div className="terminar-compra">Terminar mi compra</div></Link>}
                    </div>
            </div>
            ) : (<div>El item no existe. <Link to={`/`}>Volver a la tienda.</Link></div>)}
        </React.Fragment>
    )
}