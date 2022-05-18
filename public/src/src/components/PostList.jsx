import { useState } from "react"
import "./PostList.css"
     
function PostList({myPosts}) {
    <ul>
        {myPosts.results.forEach (post => {
        <li>
            <p> {post.message} </p>
        </li>
        })}
    </ul>
}

export {PostList};