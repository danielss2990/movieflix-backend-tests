import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReactComponent as AuthImage } from '../../core/assets/images/auth.svg'; 
import Login from './components/Login';
import './styles.scss';

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="auth-info">
                <h1 className="auth-info-title">Avalie Filmes</h1>
                <p className="auth-info-subtitle">
                    Diga o que você achou do seu filme favorito
                </p>
                <AuthImage />

            </div>
            <div className="auth-content">
                <Switch>
                    <Route path="/home/auth/login" exact>
                        <Login />
                    </Route>
                    <Route path="/home/auth/register">
                        <h1>Register</h1>
                    </Route>
                    <Route path="/home/auth/recover">
                        <h1>Recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Auth;