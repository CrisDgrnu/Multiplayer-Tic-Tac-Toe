import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Landing from './components/Landing/Landing';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
