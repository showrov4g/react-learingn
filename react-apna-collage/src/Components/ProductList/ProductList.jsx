import Product from "../Product/Product";



const ProductList = ({product}) => {
    return (
        product.map((product, idx) =>{
            return (
                <Product key={idx} product={product} incrementQuantity={product.incrementQuantity}></Product>
            )
        })
    );
};

export default ProductList;