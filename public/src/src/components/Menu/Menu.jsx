import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import React, { useState, useEffect, setState } from "react";
import "./Menu.scss"

function Menu() {
    const [menuBar, setMenuBar] = useState("closed")

    function openMenu () {
        setMenuBar("open")
    }
    function closeMenu () {
        setMenuBar("closed")
    }
     
    if (menuBar==="open"){
        return(<>
            <button className="menu-button" onClick={() => closeMenu()}>Menu</button>
            <nav className="navigation-bar">
                <Link to = "/posts" className="navigation-link">Posts</Link>
                <Link to = "/users" className="navigation-link">Users</Link>
                <Link to="/" className="navigation-link">Home</Link>
            </nav>
        </>)
    }

    if (menuBar ==="closed"){
        return(
            <button className="menu-button"  onClick={() => openMenu()}>Menu</button>
        )
    }
   
}

export {Menu}



