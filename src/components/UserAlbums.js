import React, {useState, useEffect} from 'react';
import {Button, Navbar, Spinner} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {getAlbumByUser, getUserByID} from "../request/Request";
import ErrorMessage from "./ErrorMessage";


function UserAlbums() {

    const [Albums, setAlbums] = useState([])
    const [User, setUser] = useState({})
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);


    let {id: userID} = useParams();


    useEffect(() => {
        getAlbumByUser(userID).then((data) => {
            setAlbums(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })

        getUserByID(userID).then((data) => {
            setUser(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })

    }, [userID])

    if (Loading) {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">


                <Spinner animation="border" variant="white"/>

            </div>
        )
    }

    if (Error) {
        return (<ErrorMessage message={Error}/>)
    }


    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Link to={"/user/" + userID}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand variant="mr-auto ml-3"> {User.name}'s Albums </Navbar.Brand>
            </Navbar>


            {
                Albums.map((Albums, idx) => (
                    <Link key={idx} to={"/album/"+Albums.id}>
                        <div className="postsCard">
                            {Albums.title}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserAlbums;
