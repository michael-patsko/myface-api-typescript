import { PostListItem } from '../PostListItem/PostListItem';


function PostsPage({myPosts}) {

    return (
    <ul>
        {myPosts.map (post => (<PostListItem post = {post}/>))}
    </ul>)
}

export {PostsPage}