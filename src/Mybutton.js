import React from 'react';
export default function Mybutton (props){
    return(
        <button 
        style={{backgroundColor:"blue"}}>
        {props.children}
        </button>
    );
}