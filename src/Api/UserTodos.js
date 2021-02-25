import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function ShowUser() {

    const [Todos, setTodos] = useState([])
    const [User, setUser] = useState({})

    let userID = window.location.href;
    if (userID[userID.length - 1] === "/") {
        userID = userID[userID.length - 8];
    } else {
        userID = userID[userID.length - 7];
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}/todos`)
            .then(({data}) => {
                setTodos(data);
            }).catch(err => {
            console.error(err)
        })

    }, [userID])

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(({data}) => {
                setUser(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [userID])


    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 go-back">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto"> {User.name}'s Todos </Navbar.Brand>
            </Navbar>


            {
                Todos.map((Todos, idx) => (
                    <div key={idx} className="userCard">
                        {Todos.title}
                    </div>
                ))
            }
        </div>
    )
}

export default ShowUser;
