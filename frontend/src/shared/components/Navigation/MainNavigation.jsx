import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faShoppingBag, faBuilding, faTicketAlt, faAdjust } from '@fortawesome/free-solid-svg-icons';

import './MainNavigation.css';
import MainHeader from './MainHeader';

class MainNavigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search:''
        }
    }
    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    render(){
        const {handleSearch} = this.props;
        return (
            <MainHeader>
                <div className="main-navigation__logo">
                <Link to="/"><img className="main-navigation__title" src={require("./clicksuscribe.png")} alt="Logo" /> </Link>
                </div>
                <nav className="main-header__nav">
                   <ul className="main-header__item-list">
                       <li className="main-navigation__item verProductos" >
                           <Link to="/catalogue"><FontAwesomeIcon icon={faShoppingBag} />  Ver todos los productos</Link>
                       </li>
                       <li className="main-navigation__item cliente">
                       <Link to="#"><FontAwesomeIcon icon={faBuilding}/>  Clinete</Link>
                       </li>
                       <li className="main-navigation__item siclik">
                       <Link to="#"><FontAwesomeIcon icon={faAdjust}/>  siclik</Link>
                       </li>
                       <li className="main-navigation__item soporte">
                       <Link to="#"><FontAwesomeIcon icon={faTicketAlt}/>  Soporte</Link>
                       </li>
                       <li className="main-navigation__item cart">
                       <Link to="#"><FontAwesomeIcon icon={faShoppingCart} /> 0 </Link>
                       </li>
                       <li className="main-navigation__item user">
                       <Link to="/user"><FontAwesomeIcon icon={faUser} /></Link> 
                       </li>
                   </ul>
                   <div className="nav-search">
                       <input
                       value={this.state.search}
                       onChange={this.handleChange}
                       type="text"
                       placeholder="Buscar..."
                       />
                       <button onClick={() =>{ handleSearch(this.state.search)}}>Buscar</button>
                   </div>
                </nav>
            </MainHeader>
        )
    }
}

export default MainNavigation;