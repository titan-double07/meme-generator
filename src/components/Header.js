import React from 'react';
import logo from '../images/logo.png'


export default function Header(){
    return(
        <header className="flex-nav">
        <div className="logo flex">
            <img src={logo} alt=""/>
            <h3>Meme Generator</h3>
        </div>
        <p>React Course - Project 3</p>
    </header> 
    )
}