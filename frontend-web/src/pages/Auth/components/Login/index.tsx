import React from 'react';
import AuthCard from '../Card';
import './styles.scss';


const Login = () => {
    return (
        <AuthCard title="login">
            <form className="login-form"> 
                <input 
                type="email" 
                className="form-control"
                placeholder="Email"
                >

                </input>
            </form>
        </AuthCard>
    )
}

export default Login;