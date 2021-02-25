import React, {useEffect, useState} from 'react';
import {Button, Navbar} from "react-bootstrap";
import {getUsers} from "../request/Request";
import {Link} from 'react-router-dom';

export default function AllUsers() {

    const [Users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        })
    }, [])

    return (
        <div>

            <Navbar variant="dark sticky-top justify-content-between" id="navbar">
                <Navbar.Brand variant="mr-auto" href="#"> All Users </Navbar.Brand>
                <Link to={"/addUser"}>
                    <Button className="nav-button">Create New User</Button>
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


