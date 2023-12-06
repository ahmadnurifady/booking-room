import './login.css'
import React, {useState} from 'react'
import axios from "axios"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
           const result = await axios.post('http://localhost:8080/api/v1/auth/login',{
                email: email,
                password: password
            })
            const data =await result.json()
            console.log(data)
        } catch (error){
            if(error.response){
                console.log(error.response.data)
            }
        }
    }

    async function handleGetRoom() {
        try {
            const result = await fetch('http://localhost:8080/api/v1/rooms/get')
            const data = await result.json()
            console.log(data)
        } 
        catch (error) {
            console.log()
        }
    }



    return (
        <>
            <div className="login-container">
                <h2>LOGIN</h2>
                <div className="input-group">
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" placeholder="Enter your username" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">password</label>
                    <input type="text" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className="login-button" onClick={() => handleLogin()}>login</button>
                <button className='login-button' onClick={() => handleGetRoom()}>get room</button>
            </div>
        </>
    )
}

export default Login