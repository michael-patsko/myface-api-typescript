import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { PostListItem } from './components/PostListItem/PostListItem';

function App() {

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(jsonValue => setMyPosts(jsonValue?.results || []))
  }, []);

  return (
    <div className="App">
      <ul>
        {myPosts.map (post => (<PostListItem post = {post}/>))}
      </ul>
    </div>
  );
}

export default App;