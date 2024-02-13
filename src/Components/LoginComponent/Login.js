import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../RegisterComponent/register.css"

let Login = ()=>{
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
    })
    function login() {
        fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Add any other headers as needed
                },
                body: JSON.stringify(newUser),
              })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network error');
                  }
                 
                  return response.json();
                })
                .then(data => {
                    localStorage.setItem('user',  JSON.stringify({...data.user, accessToken: data.accessToken}));
                    navigate("/")
                })
                .catch(error => {
                  console.error('Error during POST request:', error.message);
                });
    }
    return (
        <div className="Register">
            <form action="#" className="form">
                <h2 className="form__title">Авторизация</h2>
                <input type="text" placeholder="Ваш email" onChange={(e)=>{setNewUser({...newUser, email: e.target.value})}}/>
                <input type="password" placeholder="Ваш password" onChange={(e)=>{setNewUser({...newUser, password: e.target.value})}}/>
                <button className="form__btn" type="button" onClick={login}>Войти</button>

                <Link to="/register">Создать аккаунт</Link>
            </form>
        </div>
    )
}


export default Login;