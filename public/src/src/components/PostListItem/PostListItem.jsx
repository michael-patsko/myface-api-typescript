import { useState } from "react"
import "./PostListItem.css"
     
function PostListItem({post}) {
    return (
        <li>
            <img src = {post.postedBy.profileImageUrl}></img>
            <a href= {`/users/${post.postedBy.id}/`}>{post.postedBy.name}</a>
            <img src = {post.imageUrl}></img>
            <p> {post.postedBy.username} </p>
            <p> {post.createdAt} </p>
            <p> {post.message} </p>
        </li>
    );
}

export { PostListItem };

