import React from "react";
import './Navbar.css';
import logo from './logo.png';

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
					<li><a href={url}><img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1660925309~exp=1660925909~hmac=38769edfd0f58c47a39da2da0e74f27dc217fdcb6eb1df147f088908694b2045" alt="carrito" /></a></li>
				</ul>
			</nav>
        </header>
    )
}

export default Navbar