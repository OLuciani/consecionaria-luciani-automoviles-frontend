import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar1 from "../navBar1/NavBar1";
import Footer from "../footer/Footer";
import SideBar from "../sideBar/SideBar";
import "./ExplorarElectricos.css";

const ExplorarElectricos = () => {
  const [vehiculs, setVehiculs] = useState([]);

  /* Hago el fetch con la api del backend que está en el servidor */
  useEffect(() => { 
    fetch('https://consecionaria-luciani-automoviles-backend.onrender.com/api/vehiculosList')
      .then((res) => res.json())
      .then((allCars) => {
        setVehiculs(allCars);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
        <NavBar1 />
        <SideBar />
      </header>

      <div className="box">

        {/* <h1 className="text-center title-nuestros-modelos">Todos los Modelos</h1>  */}

        <h3 className=" text-center titulo-categoria">Modelos eléctricos</h3>
        {/* <hr / > */} 
        <div className="list-cars-modelos">
          {
            (vehiculs.length < 1) ? <p className="cargando">Cargando Imágenes...</p>:
               vehiculs.map((vehicul) => { //Uso .map para listar los productos
                  //console.log(typeof(vehicul.imageUrl));
                  let id = vehicul._id;
                    if(vehicul.category === "Eléctrico") {
                    return (
                      <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                        {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                        <article className="article-modelos">
                          <img src={`https://consecionaria-luciani-automoviles-backend.onrender.com${vehicul.imageUrl}`} alt={`Foto ${vehicul.name}`} /> 
                          <p className="parrafo"><b>{vehicul.name}</b></p>
                        </article>
                      </Link> 
                      
                    );
                  }
                })
              
          }

        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ExplorarElectricos;