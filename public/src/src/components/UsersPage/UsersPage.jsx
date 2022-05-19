import React, { useState, useEffect } from "react";
import { UsersListItem } from "../UsersListItem/UsersListItem"
import "../PostsPage/PostsPage.scss"


function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(jsonValue => setUsers(jsonValue?.results || []))
    }, []);

    return (<>
    <h1>Users</h1>
    <ul className="post-list">
        {users.map (user => (<UsersListItem user = {user}/>))}
    </ul></>)
}

export {UsersPage}