import React from 'react'

import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList= props =>{
    if(props.products.length===0) {
        return (
        <div className="product-list center">
            <h2>No hay productos</h2>
        </div>
        );
    }
    return (
        <ul className="product-list">
            {props.products.map(product =>(
                <ProductItem 
                key={product.id} 
                idArticle={product.idArticle} 
                image={product.image} 
                title={product.title}
                description={product.description}
                mark={product.mark} 
                price={product.price} 
                />
            ))}
        </ul>
    );
}

export default ProductList;
