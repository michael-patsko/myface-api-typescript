import { UsersListItem } from "../UsersListItem/UsersListItem"


function UsersPage({users}) {

    return (
    <ul>
        {users.map (user => (<UsersListItem user = {user}/>))}
    </ul>)
}

export {UsersPage}