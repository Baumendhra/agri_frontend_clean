import React, { useState } from 'react';

function Login(){
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const login = e=> {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/token/", {
            method:"POST",
            headers:{'Content-Type': 'application/json'}, 
            body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.access);
            alert("Login Successfully!");
        });
    };
    return(

        <form onSubmit={login} className="bg-white p-4 rounded shadow w-1/2 mx-auto">
            <h2 className="text-xl mb-4 font-bold">Login</h2>
            <input className="border p-2 w-full mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input className="border p-2 w-full mb-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
        </form>
    );
}


export default Login;