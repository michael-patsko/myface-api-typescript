import { useState } from "react"
import "./UserPostListItem.scss"
     
function UserPostListItem({post}) {
    return (
        <li className="post">
            <img src = {post.imageUrl} className="post-image"></img>
            <div className="post-text">
                <p className= "post-date"> {post.createdAt} </p>
                <p className= "post-message"> {post.message} </p>
            </div>
        </li>
    );
}

export { UserPostListItem };