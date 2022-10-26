import { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = () =>{
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

    console.log(products);
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
        </div>
    )
}
export default ProductList;