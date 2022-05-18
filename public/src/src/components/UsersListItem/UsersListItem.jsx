
     
function UsersListItem({user}) {
    return (
        <li>
            <img src = {user.profileImageUrl}></img>
            <p>{user.name}</p>
        </li>
    );
}

export { UsersListItem };
