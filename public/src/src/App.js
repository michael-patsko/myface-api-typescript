import './App.scss';
import React, { useState, useEffect } from "react";
import { PostsPage } from "./components/PostsPage/PostsPage";
import { UsersPage } from './components/UsersPage/UsersPage';
import { BlankPage } from './components/BlankPage/BlankPage';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import { UserDetails } from './components/UserDetails/UserDetails';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path = "/posts" element = {<PostsPage/>}/>
          <Route path = "/users" element = {<UsersPage/>}/>
          <Route path = "" element = {<BlankPage/>}/>
          <Route path = "/users/:id" element = {<UserDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;