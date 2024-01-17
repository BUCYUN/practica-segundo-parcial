import React from "react";

function Mostrar({userName, fullName, Age}){
    return(
        <div>
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
