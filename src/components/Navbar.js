import React from "react";
import '../style/Navbar.css';
import logo from '../img/logo.png';
import CartWidget from "./CartWidget";

const Navbar = () =>{
	let url="";
    return(
        <header>
			<div className="logo">
				<a href="app.js"><img src={logo} alt="imagen" /></a>
			</div>
			<nav className="menu">
				<ul>
					<li><a href={url}>Proteinas</a></li>
					<li><a href={url}>Creatinas</a></li>
					<li><a href={url}>Aminoacidos</a></li>
					<li className="cartwidget"><CartWidget url={url} numero={3}/></li>
				</ul>
			</nav>
        </header>
    )
}

export default Navbar