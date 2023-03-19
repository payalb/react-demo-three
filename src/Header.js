import React from "react";

function Header(props){
    return (
     <div>
        <h1>{props["title"]}</h1>
        
        <h1>{props.title}</h1>

        </div>
    )
}

export {Header};