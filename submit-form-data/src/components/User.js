import React, { useState } from "react";
import Mostrar from "./Mostrar";
import '../styles/User.css'

function User () {
    const [userName, setUserName] = useState ("")
    const [fullName, setFullName] = useState ("")
    const [age, setAge] = useState ("")
    const [mostrar, setMostrar] = useState (false)

    const addUser = () => {
        setMostrar(true)
    }

    return (
        <div className="user">
            <div className="userName"> 
                <p>Username:</p>
                <input 
                type="text" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div className="fullName">
                <p>FullName:</p>
                <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                />
            </div>
                
            <div className="age">
                <p>age:</p>
                <input 
                type="text" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button className="boton" onClick={addUser}>Submit</button>
            {mostrar ? <Mostrar userName={userName} fullName={fullName} ge={age}/> : null}
            
        </div>
        
    );
}

export default User;
/*
{mostrar && (
    <>
    <h4>Request Sent to DB with below request data</h4>
    <ul>
        <li>UserName: {userName.toUpperCase()}</li>
        <li>FullName: {fullName.toUpperCase()}</li>
        <li>Age: {age}</li>
    </ul>
    </>
)}*/