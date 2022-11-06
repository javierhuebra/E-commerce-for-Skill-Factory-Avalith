/* VOY A PROBAR USAR REDUX TOOLKIT PARA PODER HACER UNA PETICION UNICA A LA API DE PRODUCTOS Y GUARDARLA EN LA STORE PARA ACCEDER A LA INFO SIN
HACER PETICIONES INNECESARIAS, EL METODO NO SE SI ES EL CORRECTO PERO EN LA PROMESA, CUANDO SE RESUELVE LE MANDO LA DATA CON EL DISPATCH A LA STORE
ES UN POCO CONFUSO PERO ESPERO ENTENDERLO BIEN EN ALGUN MOMENTO YA QUE ES GENIAL, SUPER EFICIENTE PARECE */

import { useEffect } from "react";


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";

import Product from "./Product";

const ProductList = () =>{
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(()=>{
        
        !product.products.length && dispatch(fetchProducts());

    },[])
   
    return(
        <div>
            <h2>Products List</h2>
            {product.loading && <div>Loading...</div>}
            {!product.loading && product.error ? <div>Error: {product.error}</div> : null }
            {!product.loading && product.products.length ? 
            product.products.map((product)=>{
                return(
                    <Product
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                )
               
            }) : null}
        </div>
    )   
  
}
export default ProductList;