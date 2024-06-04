import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_GREENATIK}/api/products`);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []); 

    return (
        <div>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product._id}>
                        {product.title} - ${product.salePrice}
                    </div>
                ))
            ) : (
                <div>No products found</div>  // Provide feedback in case no products are available
            )}
        </div>
    );
}

export default ProductList;
