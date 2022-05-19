import { useState } from "react"
import "./PostListItem.scss"
import {Likes} from "../LikesAndDislikes/Likes";
     
function PostListItem({post}) {
    return (
        <li className="post">
            <img src = {post.imageUrl} className="post-image"></img>
            <img src = {post.postedBy.profileImageUrl} className="profile-picture"></img>
            <div className="post-text">
                <a className = "post-name" href= {`/users/${post.postedBy.id}/`}>{post.postedBy.name}</a>
                <p className= "post-username"> {post.postedBy.username}</p>
                <p className= "post-date"> {post.createdAt} </p>
                <p className= "post-message"> {post.message} </p>
                <Likes lengthOfLikesArray={post.likedBy.length} postId={post.id}/>
            </div>
        </li>
    );
}

export { PostListItem };