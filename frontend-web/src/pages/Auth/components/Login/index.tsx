import React from 'react';
import { useForm } from 'react-hook-form';
import Buttonicon from '../../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';

type FormData = {
    username: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit } = useForm<FormData>(); // initialize the hook
    
    const onSubmit = (data: FormData) => {
        console.log(data);
        //chamar api de autenticação
    }
    
    return (
        <AuthCard title="login">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                    name="email" 
                    ref={register}
                >

                </input>

                <input
                    type="password"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Senha"
                    name="password" 
                    ref={register}
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