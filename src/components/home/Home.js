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
import imagenFilosofíaDeDiseño from "./img/image.MQ6.0.20180517222237.jpeg"
import Footer from "../footer/Footer";
import Navbar1 from "../navBar1/NavBar1";
import SideBar from "../sideBar/SideBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="box-home">
          <header>
            <Navbar1 />
            <SideBar />
            {/* <NavBar /> */}
          </header>

            <div className="container-promo-electric ">
              <div className="box-promo-electrico">
                  
                <div className="promo-electric">
                  <p className="titulo-promo">Haz que este año sea eléctrico.</p>
                  <p className="parrafo-promo">Con ofertas especiales en el EQB y el EQS 2022, tu vehículo eléctrico ideal finalmente está dentro del alcance.</p>
                </div>

                <div className="box-buttons">
                  <div className="button-explorar">
                    <Link to={"/exploreElectric"}><p>Explorar eléctricos</p></Link>
                  </div>
                </div>

              </div>

              <img className="imagen-fondo-home1 " src={imageHomeMB} alt="Foto fondo home" /> 

            </div>
            

            <div className="container-promo-electric ">
              <div className="box-promo-leyend">
                  
                <div className="promo-electric">
                  <p className="titulo-promo">Despierta la leyenda que llevas dentro.</p>
                  <p className="parrafo-promo">Ahora puedes, con ofertas especiales para vehículos SL en este emocionante 2023.</p>
                </div>

                <div className="box-buttons">
                  <div className="button-explorar">
                    <Link to={"/products"}><p>Explorar usados</p></Link>
                  </div>
                </div>

              </div>

              <img className="imagen-fondo-home2" src={fondoHomeMercedezBenz} alt="Foto fondo home" />
            </div>

            <div className="filosofia-diseño">
              <div className="contenedor-imagen-filosofía-diseño">
                <img className="imagen-filosofía-diseño" src={imagenFilosofíaDeDiseño} alt="Imagen Filosofía del Diseño" />
              </div>
              
              <div className="filosofía-diseño-texto">
                <div className="box-texto-filosofía-diseño">
                  <p className="filosofia-diseño-título">Filosofía de diseño de Mercedes-Benz</p>
                  <p className="filosofia-diseño-párrafo1">
                    El diseño recrea lo extraordinario y contribuye esencialmente a definir la imagen de la marca de cara a la opinión pública. Conjugando tradición y modernidad, los estilistas del departamento de diseño de Mercedes-Benz esbozan ya hoy los automóviles del futuro.{/* <br/><br/> */}
                  </p>
                </div>
              </div>
              <p className="filosofia-diseño-párrafo2">
                Consideran esencial un enfoque cabal del diseño para poder representar con perfección tanto los productos como las marcas de Mercedes-Benz Group AG. En consecuencia, el jefe de diseño de Grupo Mercedes-Benz Gordon Wagener y su equipo de especialistas repartidos por todo el mundo se encargan de configurar la totalidad de marcas y productos de la empresa, desde los automóviles hasta el diseño corporativo holístico de todas las marcas del Grupo. De ese modo, los diseñadores generan todos los puntos de contacto de los clientes con la empresa, creando una experiencia general.
              </p>

            </div>
          <Footer />
        </div>
    </>
  );
};

export default Home;
