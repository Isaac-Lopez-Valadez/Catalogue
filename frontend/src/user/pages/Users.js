import React from 'react';
import UserList from './../components/UserList';

const Users = () =>{
    const USERS = [{id:'U1',
     name:'Isaac', 
     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png', 
     product:3}];
  return <UserList items={USERS}/>
}

export default Users;