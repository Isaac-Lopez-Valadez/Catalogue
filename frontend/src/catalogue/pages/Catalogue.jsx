import React from 'react';

import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import './Catalogue.css';



const Catalogue = props =>  {
    
    return (
        <div className="container">
            <Filter products={props.products} handlefilter={props.handlefilter} marks={props.marks} />
            <ProductList products={props.products} />
        </div>
    ); 
    
    
}

export default Catalogue;