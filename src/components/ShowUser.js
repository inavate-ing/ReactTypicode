import React, {useState, useEffect} from 'react'
import {Button, Card, Navbar} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getUserByID} from "../request/Request";

function ShowUser() {

    const [User, setUser] = useState({})

    let { id: userID } = useParams();

    useEffect(() => {
       getUserByID(userID).then((data) => {
           setUser(data);
       })
    }, [userID])

    return (
        <div>


            <Navbar variant="dark" id="navbar">
                <Link to={"/"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto"> {User.name} </Navbar.Brand>
            </Navbar>

            <Card className="userInfo" text="white">
                <Card.Body>

                    <Card.Title>@{User.username}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{User.email}</Card.Subtitle>

                    <Card.Text>
                        Phone Number : {User.phone} <br/>
                        <span className="text-muted">
                        Address : <br/>
                            {User.address ? User.address.street : ""}, {User.address ? User.address.suite : ""} <br/>
                            {User.address ? User.address.city : ""}, {User.address ? User.address.zipcode : ""}
                    </span>
                    </Card.Text>

                    <Link to={"/user/" + User.id + "/posts"} className="anchorLink">
                        <Button className="userButtons" variant="primary">
                            Posts
                        </Button>
                    </Link>

                    <Link to={"/user/" + User.id + "/todos"} className="anchorLink">
                        <Button className="userButtons" variant="primary">
                            Todos
                        </Button>
                    </Link>

                    <Link to={"/user/" + User.id + "/albums"} className="anchorLink">
                        <Button className="userButtons" variant="primary">
                            Albums
                        </Button>
                    </Link>


                </Card.Body>
            </Card>
        </div>
    )
}

export default ShowUser;
