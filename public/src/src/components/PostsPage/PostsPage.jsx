import React, { useState, useEffect } from "react";
import { PostListItem } from '../PostListItem/PostListItem';
import "./PostsPage.scss"


function PostsPage() {

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
          .then(response => response.json())
          .then(jsonValue => setMyPosts(jsonValue?.results || []))
    }, []);

    return (<>
    <h1>Posts</h1>
    <ul className="post-list">
        {myPosts.map (post => (<PostListItem post = {post}/>))}
    </ul></>)
}

export {PostsPage}