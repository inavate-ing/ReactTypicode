import React, {useEffect, useState} from 'react';
import {Navbar, Button} from 'react-bootstrap';
import axios from 'axios';

const fetchData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => {
            return data
        }).catch(err => {
            console.error(err);
        });
}

const getUserName = userInfo => {
    return `${userInfo.name}`;
}


function Home() {

    const [userInfos, setUserInfos] = useState([]);

    useEffect(() => {
        fetchData().then(randomData => {
            setUserInfos(randomData);
        });
    }, [])

    return (
        <div>
            <Navbar variant="dark" id="navbar">
                <Navbar.Brand variant="mr-auto"> Home </Navbar.Brand>
                <Button variant="outline-primary ml-auto">Create New User</Button>
            </Navbar>

            <div className="container">
                    {
                        userInfos.map((userInfo, idx) => (
                            <div key={idx} className="userCard">
                                {getUserName(userInfo)}
                            </div>
                        ))
                    }
            </div>

        </div>
    );
}

export default Home;