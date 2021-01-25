import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Catalog from './pages/Catalog';
import Details from './pages/Details';
import Auth from './pages/Auth';

const Routes = () => (

    <BrowserRouter>
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
            
            <Route path="/catalog">
                <Catalog />
            </Route>

            <Route path="/details">
                <Details />
            </Route>

        </Switch>
    </BrowserRouter>
);

export default Routes;