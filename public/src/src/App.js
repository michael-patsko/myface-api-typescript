import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { PostList } from './components/PostList';

function App() {

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(jsonValue => setMyPosts(jsonValue?.results || []))
  }, []);

  return (
    <div className="App">
      <button onClick = {() => console.log(myPosts)}>Click me</button>
      <ul>
        {myPosts.map (post => (
        <li>
            <p> {post.message} </p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;