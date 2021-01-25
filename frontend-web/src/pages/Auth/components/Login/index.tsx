import React from 'react';
import Buttonicon from '../../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';


const Login = () => {
    return (
        <AuthCard title="login">
            <form className="login-form">
                <input
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                >

                </input>

                <input
                    type="password"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Password"
                >

                </input>

                <div className="login-submit">
                    <Buttonicon text="logar" />
                </div>

            </form>
        </AuthCard>
    )
}

export default Login;