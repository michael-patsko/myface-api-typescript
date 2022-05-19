import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function UserDetails () {
    
    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
      fetch(`http://localhost:3001/users/${id}`)
        .then(response => response.json())
        .then(retrievedUser => setUser(retrievedUser))
    }, [id]);
    
    return (
        console.log(user.name)
    );
}

export { UserDetails };