import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext([]);

export const CartContextContainer = ({defaultValue = [], children}) => {

    const [carrito, setCarrito] = useState(defaultValue)
    const [qtyStock, setQtyStock] = useState()

    const addItem = ((cartItemObj) => {

        const existe = carrito.some( producto => producto.item === cartItemObj.item  );
        console.log(carrito);
        if(existe){
            const productos = carrito.map( producto => {
                if( producto.item === cartItemObj.item ) {
                    producto.cantidad = producto.cantidad + cartItemObj.cantidad;
                    return producto
                } else {
                    return producto; // retorna los objetos que no son los duplicados
                }
            })
            setCarrito(productos);
        } else {
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

    const validateQty = ((cartItemObj) => {
        
        if(cartItemObj.enCarrito > cartItemObj.stock){
            return false
        } else {
            return  true
        }
    })
    
    return(
        <CartContext.Provider value={[carrito, setCarrito, addItem, removeItems, removeItem, validateQty]}>
            {children}
        </CartContext.Provider>
    )
}