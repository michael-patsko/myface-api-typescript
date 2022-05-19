import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./UserDetails.scss";
import { UserPostListItem } from "../UserPostListItem/UserPostListItem";

function UserDetails () {
    
    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
      fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .then(retrievedUser => {console.log(retrievedUser); setUser(retrievedUser)})
    }, [id]);
    
    return (<>
        <img className = "cover-image" src = {user?.coverImageUrl}></img>
        <img className = "user-details-profile-picture" src = {user?.profileImageUrl}></img>
        <div className = "profile-details">
            <h1 className = "profile-name">{user?.name}</h1>
            <p className = "profile-username">{user?.username}</p>
            <p className = "profile-email">{user?.email}</p>
        </div>
        <div className = "empty-box"></div>
        <ul>
            {user?.posts.map(post => (<UserPostListItem post = {post}/>))}
        </ul>
    </>);
}

export { UserDetails };