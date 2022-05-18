import './App.css';
import React, { useState, useEffect } from "react";
import { PostsPage } from "./components/PostsPage/PostsPage";
import { UsersPage } from './components/UsersPage/UsersPage';
import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';

function App() {

  const [myPosts, setMyPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(jsonValue => setMyPosts(jsonValue?.results || []))
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(response => response.json())
      .then(jsonValue => setUsers(jsonValue?.results || []))
  }, []);


  return (
    <div className="App">
      <Router>
        <h1>Heading</h1>
        <Routes>
          <Route path="/posts" element={<PostsPage myPosts={myPosts} />}/>
          <Route path="/users" element={<UsersPage users={users} />}/>
          <Route path="" element={<>
            <div> Sorry this page doesn't exist, try these: </div>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
            </>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;