import { useState, useEffect } from "react";

import { db } from '../../Firebase/firebase';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'


const Carrito = () =>{
    const [carrito, setCarrito] = useState([]);
    
    const carritoCollection = collection(db, "carrito");
    console.log(carritoCollection, "carrito");

    const getCarrito = async () => {
        const dataCarrito = await getDocs(carritoCollection);
        /* console.log(dataCarrito);
        console.log(dataCarrito.docs) */
        setCarrito(
            dataCarrito.docs.map((doc) =>({...doc.data(), id_db: doc.id}))
        );
    }

    console.log("carrito", carrito);
    
    useEffect(()=>{
        getCarrito();
    },[])

    return(
        <div>
            {
                carrito.map((idEnDb)=>{
                    return(
                        <p key={idEnDb.id_from_api}>{idEnDb.id_from_api}</p>
                    )
                })
            }
        </div>
    )
}
export default Carrito;