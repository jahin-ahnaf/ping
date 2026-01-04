import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    const sendUsername = async () => {
        const res = await fetch("http://localhost:8080/api/hello", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: name }),
        });

        if (res.ok) {
            const data = await res.json();
            setResponse(data.message);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: "20%",
                margin: '0 auto',
                paddingTop: "150px",
                gap: '20px'
            }}>
                <input placeholder='Your name...' onChange={(e) => setName(e.target.value)}/>
                <button onClick={sendUsername}>Fetch API</button>
                <textarea disabled style={{ height: "50px" }} value={response} />
            </div>
        </div>
    );
}

export default App;