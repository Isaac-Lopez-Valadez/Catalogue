import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Cart from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Cart className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h2>
              {props.productCount} {props.productCount === 1 ? "Product" : "Products"}
            </h2>
          </div>
        </Link>
      </Cart>
    </li>
  );
};

export default UserItem;
