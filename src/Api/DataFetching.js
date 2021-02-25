import React, {useEffect, useState} from 'react';
import {Navbar} from "react-bootstrap";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function DataFetching() {

    const [Users, setUsers] = useState([]);


    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                setUsers(data);
            }).catch(err => {
            console.error(err)
        })

    }, [])

    return (
        <div>

            <Navbar variant="dark sticky-top" id="navbar">
                <Navbar.Brand variant="mr-auto" href="#"> All Users </Navbar.Brand>
            </Navbar>


            {
                Users.map((Users, idx) => (
                    <Link key={idx} to={"/user/"+Users.id}>
                        <div className="userCard">
                            {Users.name}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}


