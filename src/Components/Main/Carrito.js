import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { db } from '../../Firebase/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { Button } from "react-bootstrap";

const MySwal = withReactContent(Swal);

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);

    const carritoCollection = collection(db, "carrito");
    console.log(carritoCollection, "carrito");

    const getCarrito = async () => {
        const dataCarrito = await getDocs(carritoCollection);
        /* console.log(dataCarrito);
        console.log(dataCarrito.docs) */
        setCarrito(
            dataCarrito.docs.map((doc) => ({ ...doc.data(), id_db: doc.id }))
        );
    }

    console.log("carrito", carrito);

    const deleteProduct = async (id) =>{
        const productToDelete = doc(db, "carrito", id);
        try{
            await deleteDoc(productToDelete);
            MySwal.fire({
               title: "Deleted!",
               text: "Your product has been deleted",
               icon: "success",
               confirmButtonText: "Ok",
            })
        }catch(error){
            MySwal.fire({
               title:"Error!",
               text:"Your product has not been deleted",
               icon: "error",
               confirmButtonText: "Ok",
            })
        }
        getCarrito();
    }

    useEffect(() => {
        getCarrito();
    }, [])

    return (
        <div>
            {
                carrito.map((idEnDb) => {
                    return (
                        <div key={idEnDb.id_from_api}>
                            <p>{idEnDb.id_from_api}</p>
                            <p>{idEnDb.id_db}</p>
                            <Button onClick={() => deleteProduct(idEnDb.id_db)}>
                                Delete
                            </Button>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Carrito;