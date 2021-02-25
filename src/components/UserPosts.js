import React, {useState, useEffect} from 'react';
import {Link,useParams} from 'react-router-dom'
import {Button, Card, Navbar} from "react-bootstrap";
import {getPostsByUser, getUserByID} from "../request/Request";


function ShowUser() {

    const [Posts, setPosts] = useState([])
    const [User, setUser] = useState({})

    let { id: userID } = useParams();

    useEffect(() => {
        getUserByID(userID).then((data) => {
            setUser(data);
        })
        getPostsByUser(userID).then((data) => {
            setPosts(data);
        })
    }, [userID])



    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
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
