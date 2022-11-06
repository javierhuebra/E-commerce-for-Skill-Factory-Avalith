import Carrousel from "./Carrousel";
import GitHub from "./GitHub";

import SubBar from "./SubBar";
import { Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList";
import Carrito from "./Carrito";
import AddProduct from "./AddProduct";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                <div>
                    <SubBar />
                    <Carrousel />
                    <GitHub />
                </div>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/add-product" element={<AddProduct/>}/>
                <Route path="*" element={<h2>FORBIDEN 404</h2>}/>
            </Routes>
        </div>
    )
}
export default Main;