import React from 'react';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componentNavBar/ComponentNavbar';
import "./SideBar.css";

const SideBar = () => {
  return (
      <>
        <div className='sidebar'> 
            <p onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="close-sidebar">X
            </p>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/"><ComponentNavbar name={"Inicio"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/models"><ComponentNavbar name={"Modelos 0km "} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/products"><ComponentNavbar name={"Usados"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/technology"><ComponentNavbar name={"Tecnología"} /></Link>
            </div>

            <div onClick={()=>{let mostrar = document.querySelector(".sidebar");
                mostrar.style.display = "none"}} className="component-sidebar">
            <Link to="/contact"><ComponentNavbar name={"Contacto"} /></Link>
            </div>
        </div> 
      </>
  )
}

export default SideBar;