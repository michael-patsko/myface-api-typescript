import { useState } from "react"
import "./PostListItem.scss"
     
function PostListItem({post}) {
    return (
        <li className="post">
            <img src = {post.imageUrl} className="post-image"></img>
            <img src = {post.postedBy.profileImageUrl} className="profile-picture"></img>
            <a href= {`/users/${post.postedBy.id}/`}>{post.postedBy.name}</a>
            <p className="bold-body"> {post.postedBy.username}</p>
            <p className="light-secondary"> {post.createdAt} </p>
            <p className="regular-body"> {post.message} </p>
        </li>
    );
}

export { PostListItem };

