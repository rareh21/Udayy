import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import history from '../lib/history';
import './style.css';
const Login = (props) => {

    function handleLogin (e) {
        props.history.push('/home');
        e.preventDefault();
    }

    return (
                <div className="Login">
                    <form>
                        <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Name</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            onChange={props.handleName}
                            required
                        />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type="password"
                            required
                        />
                        </FormGroup>
                        <Button block bsSize="large" type="submit" onClick={handleLogin}>
                            Login
                        </Button>
                    </form>
                </div>
    );
}

export default Login;