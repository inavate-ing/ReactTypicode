import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <div className="container">
            {
                Users.map((Users, idx) => (
                    <div key={idx} className="userCard" id={Users.id}>
                        {Users.name}
                    </div>
                ))
            }
        </div>
    )
}