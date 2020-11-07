import React, { useState } from 'react';
import {
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import history from '../lib/history';

  const routes = [
    {
      path: "/",
      exact: true,
      main: Login,
    },
    {
        path: "/home",
        exact: true,
        main: Home,
      }
]

const Header = () => {
    const [name, setName] = useState('');
    function handleName (e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => (
                    <Login
                        {...props}
                        handleName={handleName}
                    />
                    )}
                />
                <Route
                    exact
                    path="/home"
                    render={(props) => (
                    <Home
                        {...props}
                        name={name}
                    />
                    )}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Header;