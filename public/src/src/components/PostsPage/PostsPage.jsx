import { PostListItem } from '../PostListItem/PostListItem';
import "./PostsPage.scss"


function PostsPage({myPosts}) {

    return (<>
    <h1>Posts</h1>
    <ul className="post-list">
        {myPosts.map (post => (<PostListItem post = {post}/>))}
    </ul></>)
}

export {PostsPage}