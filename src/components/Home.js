import React from 'react';
import {Navbar, Button} from 'react-bootstrap';

import DataFetching from "../Api/DataFetching";

export default function Home() {

    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Navbar.Brand variant="mr-auto"> Home </Navbar.Brand>
                <Button variant="outline-primary ml-auto">Create New User</Button>
            </Navbar>

            <DataFetching />
        </div>
    );
}
