import React, {useEffect, useState} from 'react';
import {Button, Navbar, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';

import {Formik, Field, Form as FormikForm} from "formik";
import {addNewTodo, getTodosByUser} from "../request/Request";

export default function NewTodo() {


    let userId = window.location.href
    if(userId[userId.length-1] === "/"){
        userId = userId[userId.length-2]
    }else{
        userId = userId[userId.length-1]
    }

    const [Todos, setTodos] = useState([]);

    useEffect(() => {
        getTodosByUser(userId).then((data) => {
            setTodos(data);
        })

    }, [userId])




    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to={"/user/"+userId+"/todos"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand href="#home">New Todo</Navbar.Brand>
            </Navbar>
            <Formik
                initialValues={{

                    userid: {userId}
                    , id: `${Todos.length}`
                    , title: ''
                    , completed: false

                }}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    addNewTodo({data});
                    resetForm(true);
                }}>
                {({values, isSubmitting}) => (
                    <FormikForm id="addTodoForm" className="addTodo">


                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Field placeholder="Enter Todo" name="title" value={values.title}
                                   as={Form.Control}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
}
