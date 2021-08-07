import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './AddCart.css';

const AddCart = () => {
    return (
        <div className="container-addCart">
            <h4>Configura tus productos.</h4>
            <p><b>¿Cuántos quieres? </b>  Disponible de 1 a 100</p>
            <button class="btn-1"><FontAwesomeIcon icon={faShoppingCart} /></button> <input type="text"  placeholder="Número de licencias"/>
            <div className="addCart__total">
            <p>Total: $0.00</p>
            <button class="btn-2">Agregar al carrito</button>
            </div>
        </div>
       
    )
}

export default AddCart;