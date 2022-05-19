import { useState } from "react"
import "./PostListItem.scss"
import { LikesAndDislikes } from "../LikesAndDislikes/LikesAndDislikes";
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import { UserDetails } from "../UserDetails/UserDetails";
     
function PostListItem({post}) {
    return (
        <li className="post">
            <img src = {post.imageUrl} className="post-image"></img>
            <img src = {post.postedBy.profileImageUrl} className="profile-picture"></img>
            <div className="post-text">
                <Link to = {`/users/${post.postedBy.id}/`} className = "post-name">{post.postedBy.name}</Link>
                <p className= "post-username"> {post.postedBy.username}</p>
                <p className= "post-date"> {post.createdAt} </p>
                <p className= "post-message"> {post.message} </p>
                <LikesAndDislikes lengthOfDislikesArray={post.dislikedBy.length} lengthOfLikesArray={post.likedBy.length} postId={post.id}/>
            </div>
        </li>
    );
}

export { PostListItem };