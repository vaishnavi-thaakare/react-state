import React from "react";
import ReactDOM from "react-dom";
import Component from "./component1";


const App = () => {
    return (
        <div>
            <h1> Good Morning </h1>
            <span><Component/></span>
            
        </div>
    )
}



ReactDOM.render(<App/>,document.querySelector("#root"))