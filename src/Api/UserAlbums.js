import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


function ShowUser() {

    const [Albums, setAlbums] = useState([])
    const [User, setUser] = useState({})

    let userID = window.location.href;
    if (userID[userID.length - 1] === "/") {
        userID = userID[userID.length - 9];
    } else {
        userID = userID[userID.length - 8];
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}/albums`)
            .then(({data}) => {
                setAlbums(data);
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
                <Navbar.Brand variant="mr-auto"> {User.name}'s Albums </Navbar.Brand>
            </Navbar>


            {
                Albums.map((Albums, idx) => (
                    <div key={idx} className="userCard">
                        {Albums.title}
                    </div>
                ))
            }
        </div>
    )
}

export default ShowUser;
