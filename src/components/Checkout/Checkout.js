import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { getFirestore } from '../../firebase/index'
import firebase from 'firebase/app'
import { CartContext } from '../../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import swal from 'sweetalert';
import './checkout.css'

export const Checkout = () => {
    const [carrito, setCarrito, addItem, removeItems, removeItem] = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState({});
    const [orderId, setOrderId]  = useState('');
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userTel, setUserTel] = useState('');
    const [userComment, setUserComment] = useState('');
    const [user, setUser] = useState({});
    const [orderConfirm, setOrderConfirm] = useState(false)

    const updateUser = (e) => {
        if(e.target.id === 'nombre'){
            setUserName(e.target.value)
            setUser({...user, nombre: e.target.value})
        }

        if(e.target.id === 'apellido'){
            setUserLastName(e.target.value)
            setUser({...user, apellido: e.target.value})
        }

        if(e.target.id === 'email'){
            setUserEmail(e.target.value)
            setUser({...user, email: e.target.value})
        }

        if(e.target.id === 'tel'){
            setUserTel(e.target.value)
            setUser({...user, tel: e.target.value})
        }

        if(e.target.id === 'comentario'){
            setUserComment(e.target.value)
            setUser({...user, comentario: e.target.value})
        }
    }
    
    const comprar = () => {
        if(userName !== '' && userLastName !== '' && userEmail !== '' && userTel !== '') {
        const db = getFirestore();
        const orderDb = db.collection('orders')
        const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(i => i.item));
        const query = itemsToUpdate.get()
        const batch = db.batch();
        
        query.then((docs) => {
            if(docs.size === 0){
                console.log("No hay resultados");
            } else {
                let items = [];
                docs.forEach((docSnapshot) => {
                    items.push(docSnapshot.data());
                    let itemsPosition = items.length - 1 // Recurso utilizado porque el index del forEach devuelve undefined
                    if(docSnapshot.data().stock >= carrito[itemsPosition].cantidad){
                        batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - carrito[itemsPosition].cantidad})
                    }
                })
                batch.commit().then(() => {
                    setOrderConfirm(true)
                });
            }
        });

        orderDb.add(order)
            .then(({id}) => {
                setOrderId(id);
            })
            .catch((error) => {
                console.log("Error: ", error);
            })
        } else {
            swal({
                title: "Faltan campos",
                text: `Debes completar todos los campos.`,
                icon: "error",
            })
        }
    }

    useEffect(() => {
        setOrder(
            {
            buyer: user,
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
            }
        )
    }, [user])

    useEffect(() => {
        if(carrito.length){
            const precioFinalItem = carrito.map((producto) => producto.price * producto.cantidad)
            const precioFinal = precioFinalItem.reduce((accumulator, currentValue) => accumulator + currentValue)
            setTotal(precioFinal);
            setUser({})
        }
    },[])

    useEffect(() => {
        orderConfirm &&
        swal({
            title: "Gracias por tu compra",
            text: `Tu código de orden es ${orderId}`,
            icon: "success",
        }).then(() => {
            removeItems();
        })
    }, [orderConfirm])

    return (
        <>
            <div className="main-container">
                <div className="checkout">
                {carrito.length ? (
                    <div>
                        <h2>Finalizar compra</h2>
                        <form className="checkout-form" onChange={updateUser}>
                            <input type="text" id="nombre" placeholder="Nombre" />
                            <input type="text" id="apellido" placeholder="Apellido" />
                            <input type="text" id="email" placeholder="Email"  />
                            <input type="text" id="tel" placeholder="Teléfono" />
                            <textarea type="text" id="comentario" placeholder="Comentario"/>
                        </form>
                        <button onClick={comprar}><FaShoppingCart /> Comprar</button>
                    </div>
                ) : (<h2><Link to={`/`}>Volver a la tienda</Link></h2>)}
                </div>
            </div>
        </>
    )
}