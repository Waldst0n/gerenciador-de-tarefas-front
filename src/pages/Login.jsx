import React from 'react';

import Button from '../components/Button';

import './Login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <h1>Gerencia</h1>

            <div className="button-container">
                <Button>Entrar</Button>
            </div>
        </div>
    );
};

export default Login;
