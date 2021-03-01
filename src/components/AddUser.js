import React, {useEffect, useState} from 'react';
import {Button, Navbar, Form, Col, Spinner} from "react-bootstrap";
import {Link} from 'react-router-dom';

import {Formik, Field, Form as FormikForm} from "formik";
import {getUsers, addNewUser} from "../request/Request";
import ErrorMessage from "./ErrorMessage";

export default function AddUser() {

    const [Users, setUsers] = useState([]);
    const [Error, setError] = useState("")
    const [Loading, setLoading] = useState(true)

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
            <Navbar bg="dark" variant="dark">
                <Link to={"/"}>
                    <Button className="mr-sm-2 nav-button">Go Back</Button>
                </Link>
                <Navbar.Brand href="#home" className="ml-3">Add User</Navbar.Brand>
            </Navbar>
            <Formik
                initialValues={{
                    id: `${Users.length}`
                    , name: ''
                    , username: ''
                    , email: ''
                    , address: {
                        street: ''
                        , suite: ''
                        , city: ''
                        , zipcode: ''
                        , geo: {
                            lat: ''
                            , lng: ''
                        }
                    }
                    , phone: ''
                    , website: ''
                    , company: {
                        name: ''
                        , catchPhrase: ''
                        , bs: ''
                    }
                }}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    addNewUser({data});
                    resetForm(true);
                }}>
                {({values, isSubmitting}) => (
                    <FormikForm id="addUserForm" className="addUser">

                        <Form.Row>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Field placeholder="Name" name="name" value={values.name} as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Field placeholder="Username" name="username" value={values.username}
                                       as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Field type="email" placeholder="Enter email" name="email" value={values.email}
                                   as={Form.Control}/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formStreet">
                                <Form.Label>Street</Form.Label>
                                <Field placeholder="Street" name="address.street" value={values.address.street}
                                       as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formSuite">
                                <Form.Label>Suite</Form.Label>
                                <Field placeholder="Suite" name="address.suite" value={values.address.suite}
                                       as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Field placeholder="City" name="address.city" value={values.address.city}
                                       as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formZipcode">
                                <Form.Label>Zipcode</Form.Label>
                                <Field placeholder="Zipcode" name="address.zipcode" value={values.address.zipcode}
                                       as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formLat">
                                <Form.Label>Latitude</Form.Label>
                                <Field placeholder="Latitude" name="address.geo.lat" value={values.address.geo.lat}
                                       as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLng">
                                <Form.Label>Longitude</Form.Label>
                                <Field placeholder="Longitude" name="address.geo.lng" value={values.address.geo.lng}
                                       as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Field placeholder="Phone" name="phone" value={values.phone} as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formWeb">
                                <Form.Label>Website</Form.Label>
                                <Field placeholder="Website" name="website" value={values.website} as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Field placeholder="Company Name" name="company.name" value={values.company.name}
                                       as={Form.Control}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBs">
                                <Form.Label>Company BS</Form.Label>
                                <Field placeholder="Company BS" name="company.bs" value={values.company.bs}
                                       as={Form.Control}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formCatchPhrase">
                            <Form.Label>Company Catch Phrase</Form.Label>
                            <Field placeholder="Company Catch Phrase" name="company.catchPhrase"
                                   value={values.company.catchPhrase} as={Form.Control}/>
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
