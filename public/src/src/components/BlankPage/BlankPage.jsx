import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';

function BlankPage(){
    return (<>
        <div> Sorry this page doesn't exist, try these: </div>
        <Link to="/posts">Posts</Link>
        <Link to="/users"> Users</Link>
        </>)
}

export {BlankPage}