import React from "react";
//import NavBar from "../navBar/NavBar";
import "./Home.css";
//import Carousel from "react-bootstrap/Carousel";
//import imageVMW from "./img/VMW5.jpg";
//import imageFerrari from "./img/Ferrari5.jpg";
//import imageLamborghini from "./img/Lamborghini1.jpg";
//import imageMercedesBenzGLC1 from "./img/Mercedes-Benz GLC L SUV1.jpg";
//import imageMercedesBenzGLC2 from "./img/Mercedes-Benz GLC L SUV2.jpg";
//import imageMercedesBenzGLC3 from "./img/Mercedes-Benz GLC L SUV3.jpg";
import fondoHomeMercedezBenz from "./img/Coupé Mercedes Benz.png";
import imageHomeMB from "./img/MercedesBenz_HKW_EQS_SUV_DR.jpg";
import Footer from "../footer/Footer";
import Navbar1 from "../navBar1/NavBar1";
import SideBar from "../sideBar/SideBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <header>
          <Navbar1 />
          <SideBar />
          {/* <NavBar /> */}
        </header>

        <main className="main-home">
          <div className="container-promo-electric ">
            <div className="box-promo-electrico">
                
              <div className="promo-electric">
                <p className="titulo-promo1">Haz que este año sea eléctrico.</p>
                <p className="parrafo-promo1">Con ofertas especiales en el EQB y el EQS 2022, tu vehículo eléctrico ideal finalmente está dentro del alcance.</p>
              </div>

              <div className="box-buttons">
                <div className="button-explorar">
                  <Link to={"/products"}><p>Explorar ofertas</p></Link>
                </div>
                <div className="button-accesorios">
                  <p>Accesorios</p>
                </div>
              </div>

            </div>

            <img className="imagen-fondo-home1" src={imageHomeMB} alt="Foto fondo home" /> 

          </div>
           
          <img className="imagen-fondo-home2" src={fondoHomeMercedezBenz} alt="Foto fondo home" /> 
          
          
          <div /* className="div-body-home" */> 
            
          {/* Componente Carousel de Bootstrap, modificado */}
            {/*<div className="d-flex justify-content-center">
              <Carousel slide={false} className="carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imageMercedesBenzGLC3}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={imageMercedesBenzGLC1}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={imageMercedesBenzGLC2} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>  */}

            <div className="informes">
              <p><b>Más de 25 años de trayectoria</b><br/>¡Tu usado también vale! Recibimos todas las marcas. Acercate y conocé los 0km y usados seleccionados que tenemos para vos. Financiacion a medida.</p>
            
              <p><b>Probalo !!</b><br/>Probá nuestros vehículos certificados, acercate y conocé todo los beneficios que tenemos para vos. Tres meses de cobertura mecánica.</p>

              <p><b>Conocés nuestro taller ?</b><br/>Ahora podés traer tu auto para control, mantenimiento o arreglos en general. Consultá promos y beneficios.</p>
            </div>

          </div>
        </main>
        <Footer />
    </>
  );
};

export default Home;
