import React from 'react';

import Button from './Button';

import './Sidebar.scss';

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <h2>Gerencia</h2>
            </div>

            <div className="signout">
                <Button>Sair</Button>
            </div>
        </div>
    );
};

export default SideBar;
