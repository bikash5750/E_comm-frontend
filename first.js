import React from "react";
import ReactDOM from "react-dom/client"


const element1 = <h1> ram ram
</h1>


function  Greet(props) {
    return <h1> hello {props.name} {props.age}</h1> 
}
const element2 = <Greet name="bikash" age="22"/>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element2)