import React from "react";
//import NavBar from "../navBar/NavBar";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
//import imageVMW from "./img/VMW5.jpg";
//import imageFerrari from "./img/Ferrari5.jpg";
//import imageLamborghini from "./img/Lamborghini1.jpg";
import imageMercedesBenzGLC1 from "./img/Mercedes-Benz GLC L SUV1.jpg";
import imageMercedesBenzGLC2 from "./img/Mercedes-Benz GLC L SUV2.jpg";
import imageMercedesBenzGLC3 from "./img/Mercedes-Benz GLC L SUV3.jpg";
import fondoHomeMercedezBenz from "./img/Coupé Mercedes Benz.png"
import Footer from "../footer/Footer";
import Navbar1 from "../navBar1/NavBar1";
import SideBar from "../sideBar/SideBar";

const Home = () => {
  return (
    <>
        <header>
          <Navbar1 />
          <SideBar />
          {/* <NavBar /> */}
        </header>

        <main className="box-home">
          {/* <h2 className="text-center title-home">Luciani Automóviles</h2> */}
           
          <img className="imagen-fondo-home" src={fondoHomeMercedezBenz} alt="Foto fondo home" />
          
          
          <div /* className="div-body-home" */> 
            
            {/* <hr /> */}
            
            {/* Componente Carousel de Bootstrap, modificado */}
            <div className="d-flex justify-content-center">
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
            </div>

            <p><b>Más de 25 años de trayectoria</b><br/>¡Tu usado vale! Todas las marcas. Acercate y conocé los usados seleccionados que tenemos para vos. Financiacion a medida.</p>
           
            <p><b>Compramos tu Usado</b><br/>Ahora podés traer tu auto, sea cual sea la marca a nuestra taller. Consultá promos y beneficios.</p>

            <p><b>Probalo </b><br/>Probá nuestros usados certificados, acercate y conocé todo los beneficios que tenemos para vos. Tres meses de cobertura mecánica.</p>
          </div>
        </main>
        <Footer />
    </>
  );
};

export default Home;
