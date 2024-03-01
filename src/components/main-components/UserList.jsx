import React from "react";
import { Avatar } from "@mui/material"

const UserList = () => {

const users = [
{ id: 1, name: "User 1", active: true},
{ id: 2, name: "User 2", active: false},
{ id: 3, name: "User 3", active: true},
{ id: 4, name: "User 4", active: false}
];

return (
<div>
    <h1>User List</h1>
    <ul>
        {users.map((user) => (
            <li key={user.id}>
        <Avatar style={{backgroundColor: user.active ? "green" : "red"}} >
            {user.name.charAt(0)}
            /</Avatar>
            <span>{user.name}</span>
            {user.active ? <span> -Active</span> : <span> - Inactive</span>}
            </li>
        ))}
    </ul>
</div>
); 
};
        
export default UserList