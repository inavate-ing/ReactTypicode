import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Button, Card, Navbar} from "react-bootstrap";


function ShowUser() {

    const [Posts, setPosts] = useState([])
    const [User, setUser] = useState({})

    let userID = window.location.href;
    if (userID[userID.length - 1] === "/") {
        userID = userID[userID.length - 8];
    } else {
        userID = userID[userID.length - 7];
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
            .then(({data}) => {
                setPosts(data);
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
                <Navbar.Brand variant="mr-auto"> {User.name}'s Posts </Navbar.Brand>
            </Navbar>


            {
                Posts.map((Posts, idx) => (
                    <Card key={idx} className="userInfo" text="white">
                        <Card.Body>
                            <Card.Title>{Posts.title}</Card.Title>
                            <Card.Text>
                                {Posts.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default ShowUser;
