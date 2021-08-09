import React from 'react';

import './UserList.css';
import UserItem from './UserItem';
import Cart from '../../shared/components/UIElements/Card';

const UserList = (props) =>{
    if(props.items.length === 0){
        return <div className="center">
            <Cart>
            <h2>No Users Found.</h2>
            </Cart>
        </div>
    }
    return (<ul className="user-list">
        {props.items.map(user =>(
            <UserItem 
            key={user.id}
            id={user.id} 
            image={user.image}
            name={user.name}
            productCount={user.product}
            />
        ))}
    </ul>);

}

export default UserList;