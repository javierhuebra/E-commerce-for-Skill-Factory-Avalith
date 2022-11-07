
import '../../StyleSheets/Product.css'

const Product = ({ image, title, price, from }) => {

    return (
        <div className="product-container">
                <p>{from}</p>
                <img className='img-product' src={image} />
                <h2>{title}</h2>
                <div className='cont-price-btn'><h3>$ {price}</h3><button className='btn-add'>Add</button></div>
                
            
        </div>
    )
}


export default Product;