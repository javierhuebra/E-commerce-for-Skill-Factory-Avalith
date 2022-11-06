import { useState, useEffect } from "react";

import { db } from '../../Firebase/firebase';
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
const Carrito = () =>{
    const [products, setProducts] = useState([]);
    /* console.log(db, "db"); */
    
    //llamamos a la colección de productos pasando como parametro la referencia
    //a la base de datos y la colecci{on que queremos recuperar

    const carritoCollection = collection(db, "products");
    console.log(carritoCollection, "carrito");

    const getCarrito = async () => {
        const dataCarrito = await getDocs(carritoCollection);
        console.log(dataCarrito);
    }
    useEffect(()=>{
        getCarrito();
    },[])
    return(
        <div>
            carrito de compras
        </div>
    )
}
export default Carrito;