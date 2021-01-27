import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Buttonicon from '../../../../core/components/ButtonIcon';
import { makeLogin } from '../../../../core/utils/request';
import AuthCard from '../Card';
import { saveSessionData } from '../../../../core/utils/auth';
import './styles.scss';
import { useHistory, useLocation } from 'react-router-dom';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}


const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormData>(); // initialize the hook
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/catalog" } };
    const onSubmit = (data: FormData) => {
        //chamar API de autenticação
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            }).catch(() => { setHasError(true); })

    }

    return (
        <AuthCard title="login">

            {hasError && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválidos!
                </div>
            )}

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="Email"
                        name="username"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    >
                    </input>

                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}

                </div>

                <div className="margin-bottom-30">
                    <input
                        type="password"
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        name="password"
                        ref={register({ required: "Campo obrigatório" })}
                    >

                    </input>

                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}

                </div>

                <div className="login-submit">
                    <Buttonicon text="logar" />
                </div>

            </form>
        </AuthCard>
    )
}

export default Login;