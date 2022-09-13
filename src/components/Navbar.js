import React from "react";
import '../style/Navbar.css';
import logo from '../img/logo.png';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <header>
			<div className="logo">
				<Link to="/"><img src={logo} alt="imagen" /></Link>
			</div>
			<nav className="menu">
				<ul>
					<li><Link to="/category/1" className="categorias">Proteinas</Link></li>
					<li><Link to="/category/2" className="categorias">Creatinas</Link></li>
					<li><Link to="/category/3" className="categorias">Aminoacidos</Link></li>
					<li><Link to="/cart" className="cartwidget"><CartWidget numero={3}/></Link></li>
				</ul>
			</nav>
        </header>
    )
}

export default Navbar