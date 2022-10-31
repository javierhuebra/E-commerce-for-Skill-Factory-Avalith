import { useState, useEffect } from "react";
import Product from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products/productsSlice";


const ProductList = () =>{
    const dispatch = useDispatch();
    const productsStore = useSelector((state) => state.products);
    
    const URL_PRDUCTS = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);

    const getProductsFromApi = () =>{
        fetch(URL_PRDUCTS)
        .then((response) => response.json())
        .then((data) => setProducts(data) )
        
    }
    
     useEffect(() =>{
        getProductsFromApi();
    },[]); 

    /* console.log(products); */
    
    return(
        <div className="product-list-container">
            {
                products.map((product)=>{
                    return(
                        <Product 
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}/>
                        
                    )
                })
            }
            <button onClick={()=>{dispatch(addProduct({ ...products }))}}>Agregar a la storage</button>
            <button onClick={()=>console.log(productsStore)}> Ver storage en consola</button>
        </div>
    )
}
export default ProductList;