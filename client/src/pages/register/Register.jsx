import "./register.css"
import React from 'react'
import { Link } from "react-router-dom"
import { useState} from "react"
import axios from 'axios'

const Register = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [err, setErr] = useState(false)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setErr(false); 
        try{            
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login")

        }catch(err){
            setErr(true);
        }
       
    };
    
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Please Enter Your Username" onChange={e=>setUserName(e.target.value)}/>
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Please Enter Your Email" onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}/>
                <button className="registerButton" type="submit" >Register</button>
            </form>
            <button className="loginRegiserButton"> 
                <Link className="link" to="/login">Login</Link>
            </button>
            {err && <span style={{color: "red", marginTop: "15px"}}>Something went wrong!</span>} 
        </div>
    )
}

export default Register
