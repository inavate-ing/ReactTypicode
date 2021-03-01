import React, {useState, useEffect} from 'react';
import {Button, Navbar, Form, Spinner} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {editTodoByID, getTodosByUser, getUserByID} from "../request/Request";
import ErrorMessage from "./ErrorMessage";


function ShowUser() {

    const [Todos, setTodos] = useState([])
    const [User, setUser] = useState({})
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);


    let {id: userID} = useParams();

    const handleChange = (e, todos) => {
        let newValue = e.target.checked


        let _todos = [...Todos]

        _todos.map((_todo) => {
            if (_todo.id === todos.id) {
                _todo.completed = !todos.completed
            }
            return _todo
        })
        setTodos(_todos)
        editTodoByID(todos.id, newValue)

            .catch((data) => {

                let _todos = [...Todos]

                _todos.map((_todo) => {
                    if (_todo.id === todos.id) {
                        _todo.completed = !newValue

                        console.error(data)
                    }
                    return _todo
                })

                setTodos(_todos)


            })
    }


    useEffect(() => {

        getUserByID(userID).then((data) => {
            setUser(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })
        getTodosByUser(userID).then((data) => {
            setTodos(data);
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
                <Navbar.Brand variant="mr-auto ml-3"> {User.name}'s Todos </Navbar.Brand>
            </Navbar>

            <Link to={"/newTodo?userId=" + userID}>
                <Button className="newButton">Add Todo</Button>
            </Link>

            {
                Todos.map((Todos, idx) => (
                    <div key={idx} className="todoCard"
                         style={{backgroundColor: Todos.completed ? '#B6495455' : '#49B6ABff'}}
                         onClick={(e) => {
                            handleChange(e, Todos)
                         }}>
                        <Form.Group controlId={idx} className="todocheck">
                            <Form.Check type="checkbox" label={Todos.title} checked={Todos.completed}
                                        onChange={(e) => handleChange(e, Todos)}/>
                        </Form.Group>
                    </div>
                ))
            }
        </div>
    )
}

export default ShowUser;
