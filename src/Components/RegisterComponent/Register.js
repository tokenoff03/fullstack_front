import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./register.css"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

let Register = (props)=>{
    const navigate = useNavigate();
    const [eye, setEye] = useState(true);
    const [newUser, setNewUser] = useState({
        email: null,
        password: null,
        name: null,
        surname: null
    })
    
    let createUser = ()=>{
        
        fetch('http://localhost:8080/register', {
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
                    props.createUser(data)
                    localStorage.setItem('user',  JSON.stringify({...data.user, accessToken: data.accessToken}));
                    navigate("/")
                })
                .catch(error => {
                  console.error('Error during POST request:', error.message);
                });
                
    }

    return (
        <div className="Register">
            <form action="" className="form">
                <h2 className="form__title">Регистрация</h2>
                <input type="text" placeholder="Ваш email" onChange={(e)=>setNewUser({...newUser,email:e.target.value})}/>
                <div className="form__password-wrapper">
                    <input  type={eye? 'password': 'text'} placeholder="Ваш password" onChange={(e)=>setNewUser({...newUser,password:e.target.value})}/>
                    {
                        eye ? (
                            <span onClick={()=>{setEye(false)}}>
                                <FaEye/>
                            </span>
                        ):(
                            <span onClick={()=>{setEye(true)}}>
                                <FaEyeSlash/>
                            </span> 
                        )
                    }
                    
                </div>
                
                <input type="text" placeholder="Имя" onChange={(e)=>setNewUser({...newUser,name:e.target.value})}/>
                <input type="text" placeholder="Фамилия" onChange={(e)=>setNewUser({...newUser,surname:e.target.value})}/>
                <button className="form__btn" onClick={createUser} type="button">Создать аккаунт</button>

                <Link to="/login">У меня есть аккаунт</Link>
            </form>
        </div>
    )
}


export default Register;