import React, {useState, useEffect} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getAlbumByUser, getUserByID} from "../request/Request";


function UserAlbums() {

    const [Albums, setAlbums] = useState([])
    const [User, setUser] = useState({})

    let { id: userID } = useParams();


    useEffect(() => {
        getAlbumByUser(userID).then((data) => {
            setAlbums(data);
        })

        getUserByID(userID).then((data) => {
            setUser(data);
        })
    }, [userID])


    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/"+userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
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

export default UserAlbums;
