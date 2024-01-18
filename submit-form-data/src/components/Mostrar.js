import React from "react";
import '../styles/User.css'

function Mostrar({userName, fullName, Age}){
    return(
        <div className="datos">
            <h4>Request Sent to DB with below request data</h4>
            <ul>
                <li>UserName: {userName.toUpperCase()}</li>
                <li>FullName: {fullName.toUpperCase()}</li>
                <li>Age: {Age}</li>
            </ul>
        </div>
    );
}

export default Mostrar;
