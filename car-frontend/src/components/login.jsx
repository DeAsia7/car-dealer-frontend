import { useState } from 'react';
import axios from 'axios';

export default function Login({ setToken }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleLogin = async () => {
    const credentials = btoa(`${username}:${password}`);
    try{
        const res = await axios.post('http://localhost:3000', {}, {
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
    <div className= "min-h-screen bg-indigo-100 flex flex-col justify-center items-center px-4 rounded">
    <div className="p-2 border border-gray-300 rounded mb-4" type="text" placeholder= "Enter your username" onChange={(e) => setUsername(e.target.value)}>username</div>
    <div className="p-2 border border-gray-300 rounded mb-4" placeholder= "Enter your password" onChange={(e) => setPassword(e.target.value)}>password</div>
    <button className="btn" onClick={handleLogin}>Login</button>
    </div>
)
}