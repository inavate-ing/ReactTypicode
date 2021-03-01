import React, {useEffect, useState} from 'react';
import {Button, Navbar, Form, Spinner} from "react-bootstrap";
import {Link} from 'react-router-dom';

import {Formik, Field, Form as FormikForm} from "formik";
import {addNewPost, getPostsByUser} from "../request/Request";
import ErrorMessage from "./ErrorMessage";

export default function NewPost() {


    let userId = window.location.href
    if(userId[userId.length-1] === "/"){
        userId = userId[userId.length-2]
    }else{
        userId = userId[userId.length-1]
    }

    const [Posts, setPosts] = useState([]);
    const [Error, setError] = useState("");
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getPostsByUser(userId).then((data) => {
            setPosts(data);
        }).catch((reason) => {
            setError(reason)
        }).finally(() => {
            setLoading(false)
        })

    }, [userId])

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
            <Navbar bg="dark" variant="dark">
                <Link to={"/user/"+userId+"/posts"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand href="#home" className="ml-3">New Post</Navbar.Brand>
            </Navbar>
            <Formik
                initialValues={{

                    userid: {userId}
                    , id: `${Posts.length}`
                    , title: ''
                    , body: ''

                }}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    addNewPost({data});
                    resetForm(true);
                }}>
                {({values, isSubmitting}) => (
                    <FormikForm id="addPostForm" className="addPost">


                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Field placeholder="Enter Title" name="title" value={values.title}
                                   as={Form.Control}/>
                        </Form.Group>

                        <Form.Group controlId="formTitle">
                            <Form.Label>Body</Form.Label>
                            <Field placeholder="Enter Body" name="body" value={values.body}
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
