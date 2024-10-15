import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.scss';
import Login from './pages/Login';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default App;
