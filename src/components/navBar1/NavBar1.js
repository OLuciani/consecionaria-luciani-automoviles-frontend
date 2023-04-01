import React from 'react';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componentNavBar/ComponentNavbar';
import "./NavBar1.css"
import imageIconMercedez from "./img/icons8-mercedes-67.png";

const NavBar1 = () => {
  return (
    <div className='div-navbar1'>
        <nav className="navbar1">
          <Link to="/">
            <div className='box-icono-nombre'>
            <span className='nombre-empresa'>Luciani<img className='icono-mercedes' src={imageIconMercedez} alt="Imagen icono Mercedez Benz" /></span> 
            </div>
          </Link>

          <div className="button-header">
            <Link to="/"><ComponentNavbar name={"Inicio"} /></Link>
          </div>
          <div className="button-header">
            <Link to="/products"><ComponentNavbar name={"Galería"} /></Link>
          </div>
          
          <div className="button-header">
            <Link to="/contact"><ComponentNavbar name={"Contacto"} /></Link>
          </div>
          
          <i onClick={()=>{let occult = document.querySelector(".sidebar");
          occult.style.display = "block"}} className="fa-solid fa-bars icono-burger image-icon"></i>
        </nav>
      </div>
  )
}

export default NavBar1;