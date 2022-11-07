/* VOY A PROBAR USAR REDUX TOOLKIT PARA PODER HACER UNA PETICION UNICA A LA API DE PRODUCTOS Y GUARDARLA EN LA STORE PARA ACCEDER A LA INFO SIN
HACER PETICIONES INNECESARIAS, EL METODO NO SE SI ES EL CORRECTO PERO EN LA PROMESA, CUANDO SE RESUELVE LE MANDO LA DATA CON EL DISPATCH A LA STORE
ES UN POCO CONFUSO PERO ESPERO ENTENDERLO BIEN EN ALGUN MOMENTO YA QUE ES GENIAL, SUPER EFICIENTE PARECE */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";

import Product from "./Product";

import { db } from '../../Firebase/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { Button } from "react-bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ProductList = () => {
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const [productsDb, setProductsDb] = useState([]);

    const productsDbCollection = collection(db, "products");
    /* console.log(productsDbCollection); */

    const getProducts = async () => {
        const dataProducts = await getDocs(productsDbCollection);
        /* console.log(dataCarrito);
        console.log(dataCarrito.docs) */
        setProductsDb(
            dataProducts.docs.map((doc) => ({ ...doc.data(), id_db: doc.id }))
        );
    }

    const confirmDeleteProduct = (id) =>{
        MySwal.fire({
            title: 'Are you sure to delete this product?',
            text: "This action don't be revert!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteProduct(id);
              MySwal.fire({
                title: "Deleted!",
                text: "Your Firebase Product has been deleted",
                icon: "success",
                confirmButtonText: "Ok",
             })
            }
          })
    }

    const deleteProduct = async (id) =>{
        const productToDelete = doc(db, "products", id);
        try{
            await deleteDoc(productToDelete);
        }catch(error){
            MySwal.fire({
               title:"Error!",
               text:"Your product has not been deleted",
               icon: "error",
               confirmButtonText: "Ok",
            })
        }
        getProducts();
    }

    


    useEffect(() => {

        !product.products.length && dispatch(fetchProducts());
        getProducts();
    }, [])

    return (
        <div>
            <h2>Products List</h2>
            {product.loading && <div>Loading...</div>}
            {!product.loading && product.error ? <div>Error: {product.error}</div> : null}
            {!product.loading && product.products.length ?
                product.products?.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            from={'Product FETCHED from API : Locked'}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    )

                }) : null}
            {
                productsDb?.map((productDb) => {
                    return (
                        <div key={productDb.id_db}>
                            <Product
                                
                                from={'Product from Firebase : Aviable CRUD'}
                                image={productDb.image}
                                title={productDb.title}
                                price={productDb.price}
                            />
                            <Link to='/add-product'><Button>Update Product</Button></Link>
                            <Button onClick={()=>confirmDeleteProduct(productDb.id_db)} variant="danger">Delete Product</Button>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default ProductList;