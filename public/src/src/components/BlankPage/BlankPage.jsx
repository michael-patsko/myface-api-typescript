import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import "./BlankPage.scss";

function BlankPage(){
    return (<div className = "blank-page-text">
        <h1>MyFace</h1>
        <h2> Sorry this page doesn't exist, try these: </h2>
        <Link to="/posts">Posts</Link>
        <Link to="/users"> Users</Link>
        </div>)
}

export {BlankPage}