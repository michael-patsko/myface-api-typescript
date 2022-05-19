import './App.scss';
import React, { useState, useEffect } from "react";
import { PostsPage } from "./components/PostsPage/PostsPage";
import { UsersPage } from './components/UsersPage/UsersPage';
import { BlankPage } from './components/BlankPage/BlankPage';
import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">s
      <Router>
        <Routes>
          <Route path="/posts" element={<PostsPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="" element={<BlankPage/>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;