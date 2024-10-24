import Product from "../Product/Product";



const ProductList = ({product}) => {
    return (
        product.map((product, idx) =>{
            return (
                <Product key={idx} product={product}></Product>
            )
        })
    );
};

export default ProductList;