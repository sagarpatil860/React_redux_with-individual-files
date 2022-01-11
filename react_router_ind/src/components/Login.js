import React from 'react';
import { useSelector } from 'react-redux';
import {useState,useEffect} from "react";


function Login() {
    let loggedInStatus= useSelector(state=>state.loggedInStatus);
    console.log(loggedInStatus);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let callApi=() => {
        console.log('username:', userName);
        console.log("password",password);
        console.log('fetching api');
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: {userName},
                password: {password}
            })
        })
            .then(res=>{console.log('response received'); return res.json();})
            .then(json=>console.log(json));
        return () => {
            
        }
    }
    return (
        <div>
            <label htmlFor="usr">User name :</label>
            <input type="text" id="usr" onChange={(e)=>setUserName(e.target.value)}/>
            <label htmlFor='pswd'>User name :</label>
            <input type="text" id='pswd' onChange={(e)=>setPassword(e.target.value)}/>
            <input type='submit'onClick={callApi}/>
        </div>
    )
}

export default Login
