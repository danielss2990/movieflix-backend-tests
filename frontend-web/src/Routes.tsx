import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Catalog from './pages/Catalog';
import Details from './pages/Details';
import Auth from './pages/Auth';
import PrivateRoute from './core/components/Routes/PrivateRoute';
import history from './core/utils/history';

const Routes = () => (

    <Router history={history}>
        <Navbar />
        <Switch>

        <Redirect from="/home/auth" to="/home/auth/login" exact/>
            <Route path="/home/auth">
                <Auth />
            </Route>

            <Redirect from="/" to="/home/auth/login" exact />
            <Route path="/home">
                <Auth />
            </Route>
            
            <PrivateRoute path="/catalog">
                <Catalog />
            </PrivateRoute>

            <PrivateRoute path="/details">
                <Details />
            </PrivateRoute>

        </Switch>
    </Router>
);

export default Routes;