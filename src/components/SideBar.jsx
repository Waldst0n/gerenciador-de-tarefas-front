import React from 'react';

import { Button } from './Button';

import './SideBar.scss';

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <h2>Waldston Santana</h2>
            </div>

            <div className="signout">
                <Button />
            </div>
        </div>
    );
};

export default SideBar;
