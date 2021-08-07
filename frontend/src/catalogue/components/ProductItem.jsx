import React from 'react'

import AddCart from './AddCart';
import './ProductItem.css';

const ProductItem = props =>{
    return (
        <li className="product-item">
            <div className="product-item__image">
                <img src={require(`${props.image}`)} alt={props.title} />
            </div>
            <div className="product-item__info">
                <h2>{props.title}</h2>
                <div className="info">
                <h3>Descripción: </h3><p>{props.description}</p>
                </div>
                <div className="info">
                <h3>Fabricante: </h3><p>{props.mark}</p>
                </div>
                <div className="info">
                <h3>Articulo Id: </h3><p>{props.idArticle}</p>
                </div>
                <div className="info">
                <h3>Precio: </h3><p>${props.price}</p>
                </div>
            </div>
            <div className="add-to-cart">
                <AddCart />
            </div>
        </li>
    )
}

export default ProductItem;
