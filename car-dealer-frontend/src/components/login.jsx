import { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleLogin = async () => {
    const credentials = btoa(`${username}:${password}`);
    try{
        const res = await axios.post('http://localhost: 5173', {}, {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
            
        });
        setToken(res);
       
    } catch (err) {
        alert('Login failed');
    }
}
return (
    <div className= "p-4 max-w-sm mx-auto">
    <div className="p-4 max-w-sm mx-auto" placeholder= "Enter your username" onChange={(e) => setUsername(e.target.value)}></div>
    <div className="input" placeholder= "Enter your password" onChange={(e) => setPassword(e.target.value)}></div>
    <button className="btn" onClick={handleLogin}>Login</button>
    </div>
)
}