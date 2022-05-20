import { useState } from "react"
import "./UserPostListItem.scss"
     
function UserPostListItem({post}) {
    return (
        <li className="user-details-post">
            <img src = {post.imageUrl} className="user-details-post-image"></img>
            <div className="user-details-post-text">
                <p className= "user-details-post-date"> {post.createdAt} </p>
                <p className= "user-details-post-message"> {post.message} </p>
            </div>
        </li>
    );
}

export { UserPostListItem };