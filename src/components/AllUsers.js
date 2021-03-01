import React, {useEffect, useState} from 'react';
import {Button, Navbar, Spinner} from "react-bootstrap";
import {getUsers} from "../request/Request";
import {Link} from 'react-router-dom';
import ErrorMessage from "./ErrorMessage";

export default function AllUsers() {

    const [Users, setUsers] = useState([]);
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

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

            <Navbar variant="dark sticky-top justify-content-between" id="navbar">
                <Navbar.Brand variant="mr-auto" href="#"> All Users </Navbar.Brand>
                <Link to={"/addUser"}>
                    <Button className="nav-button ml-3">Create New User</Button>
                </Link>

            </Navbar>


            {
                Users.map((Users, idx) => (
                    <Link key={idx} to={"/user/" + Users.id}>
                        <div className="userCard">
                            {Users.name}
                        </div>
                    </Link>
                ))
            }


        </div>
    )
}


