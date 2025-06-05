import { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleLogin = async () => {
    const credentials = btoa(`${username}:${password}`);
    try{
        const res = await axios.post('http://localhost:3000/login', {}, {
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
<div className="p-4 max-w-sm mx-auto">
    <input className="input" placeholder= "Enter username" onChange={(e) => setUsername(e.target.value)} />
    <input className="input" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
    <button className="btn" onClick={handleLogin}>Login</button>
    </div>
)
}