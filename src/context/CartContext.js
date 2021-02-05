import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

export const CartContext = React.createContext([]);

export const CartContextContainer = ({defaultValue = [], children}) => {

    const [carrito, setCarrito] = useState(defaultValue)

    const addItem = ((cartItemObj) => {

        const existe = carrito.some( producto => producto.item === cartItemObj.item  );

        if(existe){
            const productos = carrito.map( producto => {
                if( producto.item === cartItemObj.item ) {
                    if((producto.cantidad + cartItemObj.cantidad) > producto.stock){
                        swal({
                            title: "Sin stock",
                            text: `Tenemos ${cartItemObj.stock} artículo/s disponibles y ya añadiste ${producto.cantidad}.`,
                            icon: "error",
                        })
                        return producto;
                    } else {
                        swal({
                            title: "Elementos agregados a tu carrito",
                            text: `Agregaste ${cartItemObj.cantidad} artículo/s 😀`,
                            icon: "success",
                        })
                        producto.cantidad = producto.cantidad + cartItemObj.cantidad;
                        return producto
                    }
                } else {
                    return producto; // retorna los objetos que no son los duplicados
                }
            })
            setCarrito(productos);
        } else {
            swal({
                title: "Elementos agregados a tu carrito",
                text: `Agregaste ${cartItemObj.cantidad} artículo/s 😀`,
                icon: "success",
            })
            setCarrito([...carrito, cartItemObj])
        }
    })

    const removeItem = ((itemId) => {
        const filterCart = carrito.filter( producto => producto.item !== itemId );
        setCarrito(filterCart);
    })

    const removeItems = (() => {
        setCarrito(defaultValue)
    })
    
    return(
        <CartContext.Provider value={[carrito, setCarrito, addItem, removeItems, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}