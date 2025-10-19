import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, incrementUser }) => {
    return (
        <div>
            {users.map((user) => 
                <UserCard key={user.id} user={user} onIncrement={incrementUser}/>)}
        </div>
    )
}

export default UserList;