import React from "react";
import "./Technology.css";
import Footer from "../footer/Footer";
import NavBar1 from "../navBar1/NavBar1";
import SideBar from "../sideBar/SideBar";
import imagen1PortadaTechnology from "./img/MB_338328773_998512901524472_1571469182061262582_n.jpg";
import imagen2PortadaTechnology from "./img/mercedes-EQS_Tablero.jpg";
import imagenFuturoSostenible from "./img/image.MQ6.0.20210412212425.jpeg";
import imagenMovilidadEficiente from "./img/MBenz2023-EQS-SUV-Gallery_001-XL.jpg";
import imagenNivelesDeCarga from "./img/Charging-your-EQ-XL.webp";


const Technology = () => {
  return (
    <>
      <header>
        <NavBar1 />
        <SideBar />
      </header>

      <main>
        <div className="contenedor-techology">
          <div className="contenedor-futuro-sostenible">
            <div className="box-futuro-sostenible-imagen">
              <div className="div-futuro-sostenible-imagen ">
                <img src={imagenFuturoSostenible} alt="Foto Futuro sostenible" />
              </div>
            </div>

            <div className="box-futuro-sostenible-textos">
              <div className="futuro-sostenible-textos">
                <p className="pre-titulo">Movilidad neta neutra en carbono</p>

                <p className="titulo">Hacia un futuro más sostenible</p>

                <p className="texto">
                  Uno de nuestros objetivos de transformación más importantes es
                  la neutralidad de CO2 en nuestra nueva flota de vehículos.
                  <br />
                  <br />
                  La estrategia empresarial sostenible de Mercedes-Benz
                  #Ambition2039 está basada en un futuro totalmente eléctrico,
                  cuando las condiciones del mercado lo permitan.
                </p>
              </div>
            </div>
          </div>

          <div className="contenedor-image1-technology">
            <img
              className="image-technology"
              src={imagen1PortadaTechnology}
              alt="Foto portada tecnología"
            />
          </div>

          <div className="contenedor-movilidad-eficiente">
            <div className="box-movilidad-eficiente-textos">
              <div className="movilidad-eficiente-textos">
                <p className="pre-titulo">Avanzamos hacia una movilidad eficiente</p>

                <p className="titulo">La movilidad eléctrica de Mercedes Benz</p>

                <p className="texto">
                  Hace tiempo que Mercedes-Benz se sumó a la movilidad más
                  sostenible y respetuosa con el medioambiente con Mercedes-EQ,
                  ofreciendo un ecosistema de vehículos eléctricos compuesto por
                  productos, servicios, tecnologías e innovaciones.
                </p>
              </div>
            </div>

            <div className="box-movilidad-eficiente-imagen">
              <div className="div-movilidad-eficiente-imagen ">
                <img
                  src={imagenMovilidadEficiente}
                  alt="Foto Movilidad eficiente"
                />
              </div>
            </div>
          </div>

          <div className="contenedor-image2-technology">
            <img
              className="image-technology"
              src={imagen2PortadaTechnology}
              alt="Foto portada tecnología"
            />
          </div>

          <div className="contenedor-futuro-sostenible">
            <div className="box-futuro-sostenible-imagen">
              <div className="div-futuro-sostenible-imagen ">
                <img src={imagenNivelesDeCarga} alt="Foto Futuro sostenible" />
              </div>
            </div>

            <div className="box-futuro-sostenible-textos">
              <div className="futuro-sostenible-textos">

                <p className="titulo">Niveles de carga</p>

                <p className="texto">
                  Los vehículos eléctricos requieren carga a través de un cargador de nivel 1, 2 o 3. Los tres niveles indican diferentes velocidades de carga, medidas en kilovatios (kW), accesibles a través de cargadores domésticos o estaciones de carga públicas.
                </p>
              </div>
            </div>
          </div>    

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Technology;
