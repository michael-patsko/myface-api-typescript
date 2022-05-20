import "../PostListItem/PostListItem.scss"
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
function UsersListItem({user}) {
    return (
        <li className="post">
            <img src = {user.profileImageUrl} className="profile-picture"></img>
            <Link to={`/users/${user.id}`} className="post-name">{user.name}</Link>
        </li>
    );
}

export { UsersListItem };
