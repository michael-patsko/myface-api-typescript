import "../PostListItem/PostListItem.scss"
     
function UsersListItem({user}) {
    return (
        <li className="post">
            <img src = {user.profileImageUrl} className="profile-picture"></img>
            <p className="bold-body">{user.name}</p>
        </li>
    );
}

export { UsersListItem };
