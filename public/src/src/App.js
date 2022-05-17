import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [myPosts, setMyPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts").then(
      response => response.json()
    ).then(result => setMyPosts(result))
  }, []);

  return (
    <div className="App">
      <button onClick = {() => console.log(myPosts.results)}>Click me</button>
    </div>
  );
}

export default App;