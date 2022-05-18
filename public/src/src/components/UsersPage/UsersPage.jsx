import { UsersListItem } from "../UsersListItem/UsersListItem"
import "../PostsPage/PostsPage.scss"


function UsersPage({users}) {

    return (<>
    <h1>Users</h1>
    <ul className="post-list">
        {users.map (user => (<UsersListItem user = {user}/>))}
    </ul></>)
}

export {UsersPage}