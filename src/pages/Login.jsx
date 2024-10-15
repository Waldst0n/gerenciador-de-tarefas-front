import React from 'react';
import logo from '../assets/img/Logotipo_empresa_de_programação_sistemas_e_tecnologia-removebg-preview.png';

import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';

import './Login.scss';

const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo Waldston Santana" />

            <div className="button-container">
                <Button onClick={handleSignInClick}>Entrar</Button>
            </div>
        </div>
    );
};

export default Login;
