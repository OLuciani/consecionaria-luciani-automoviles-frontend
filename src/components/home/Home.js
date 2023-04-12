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
                  <Link to={"/exploreElectric"}><p>Explorar eléctricos</p></Link>
                </div>
                {/* <div className="button-accesorios">
                  <p>Accesorios</p>
                </div> */}
              </div>

            </div>

            <img className="imagen-fondo-home1 " src={imageHomeMB} alt="Foto fondo home" /> 

          </div>
           

          <div className="container-promo-electric ">
            <div className="box-promo-leyend">
                
              <div className="promo-electric">
                <p className="titulo-promo1">Despierta la leyenda que llevas dentro.</p>
                <p className="parrafo-promo1">Ahora puedes, con ofertas especiales para vehículos SL en este emocionante 2023.</p>
              </div>

              <div className="box-buttons">
                <div className="button-explorar">
                  <Link to={"/products"}><p>Explorar usados</p></Link>
                </div>
               {/*  <div className="button-accesorios">
                  <p>Accesorios</p>
                </div> */}
              </div>

            </div>

            <img className="imagen-fondo-home2" src={fondoHomeMercedezBenz} alt="Foto fondo home" />
          </div>
        </main>
        <Footer />
    </>
  );
};

export default Home;
