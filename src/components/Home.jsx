import React, {useState, useEffect } from 'react';
import { Button, Navbar, Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import history from '../lib/history';
import './home.css';
const Home = (props) => {
    const [htmlString, setHtmlString] = useState('');
    const [htmlString1, setHtmlString1] = useState('');

    async function handleOnchange (e) {
        const result = await axios.get(e.target.value);
        setHtmlString(result.data);
    }
    async function handleOnchange1 (e) {
        const result = await axios.get(e.target.value);
        setHtmlString1(result.data);
    }
    function handleLogout (e) {
        props.history.push('/');
        e.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar expand="lg" variant="light" bg="light" fixed="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col-sm col-md-3 col-sm col-lg-3">
                            <Navbar.Brand href="#">{props.name}</Navbar.Brand>
                        </div>
                        <div className="col-sm col-md-3 col-sm col-lg-3">
                            <Form inline>
                                <FormControl 
                                    type="text"
                                    className="mr-sm-2"
                                    onChange={handleOnchange}
                                />
                            </Form>
                        </div>
                        <div className="col-sm col-md-3 col-sm col-lg-3">
                            <Form inline>
                                    <FormControl
                                    type="text"
                                    className="mr-sm-2"
                                    onChange={handleOnchange1}
                                    />
                            </Form>
                        </div>
                        <div className="col-sm col-md-3 col-sm col-lg-3">
                            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <div className="split left">
                    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                </div>
                <div className="split right">
                <div dangerouslySetInnerHTML={{ __html: htmlString1 }} />
                </div>
            </div>
        </div>
    );
}

export default Home;