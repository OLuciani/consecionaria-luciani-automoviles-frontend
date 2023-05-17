import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import NavBar1 from "../navBar1/NavBar1";
import Footer from "../footer/Footer";
import SideBar from "../sideBar/SideBar";
import "./Modelos.css";
import LazyLoad from 'react-lazy-load';

const Modelos = () => {
  const automoviles = useContext(Context);

  return (
    <>
      <header>
        <NavBar1 />
        <SideBar />
      </header>

      <main>
        <div className="box">
          <h3 className=" text-center titulo-categoria">Eléctricos</h3>
          <hr / > 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    let id = vehicul._id;
                      if(vehicul.category === "Eléctrico") {
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                          <article className="article-modelos">
                            <LazyLoad width={320} height={192} once>
                              <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} /> 
                            </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    }
                  })
                
            }

          </div>


          <h3 className="text-center titulo-categoria">Todoterrenos</h3>
          <hr /> 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    let id = vehicul._id;
                    if(vehicul.category === "Combustión") { 
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                          <article className="article-modelos">
                            <LazyLoad width={320} height={192} once>
                              <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} /> 
                            </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    }
                  })
                
            }
          </div>


          <h3 className="text-center titulo-categoria">Híbridos</h3>
          <hr /> 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    let id = vehicul._id;
                    if(vehicul.category === "Híbrido"){
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                          <article className="article-modelos">
                            <LazyLoad width={320} height={192} once>
                              <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} /> 
                            </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    }
                  })
                
            }
          </div>


          <h3 className="text-center titulo-categoria">Sedans y Wagons</h3>
          <hr /> 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    //console.log(typeof(vehicul.imageUrl));
                    let id = vehicul._id;
                    if(vehicul.category === "Sedans y Wagons"){ 
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          <article className="article-modelos">
                          <LazyLoad width={320} height={192} once>
                            <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} /> 
                          </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    } 
                  })
                
            }
          </div>


          <h3 className="text-center titulo-categoria">Coupes</h3>
          <hr /> 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    let id = vehicul._id;
                    if(vehicul.category === "Coupes"){ 
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                          <article className="article-modelos">
                            <LazyLoad width={320} height={192} once>
                              <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} /> 
                            </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    }
                  })
                
            }
          </div>


          <h3 className="text-center titulo-categoria">Convertibles y Roadsters</h3>
          <hr /> 
          <div className="list-cars-modelos">
            {
              (automoviles.vehiculs.length < 1) ? <p className="cargando-imagenes-modelos">Cargando Imágenes...</p>:
                automoviles.vehiculs.map((vehicul) => { //Uso .map para listar los productos
                    let id = vehicul._id;
                    if(vehicul.category === "Convertibles y Roadsters") {
                      return (
                        <Link key={id} to={`/modelsDetails/${vehicul._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                          {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                          <article className="article-modelos">
                            <LazyLoad className="lazy" width={320} height={192} once>
                              <img className="image-modelos" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${vehicul.imageUrl}`} loading="lazy" alt={`Foto ${vehicul.name}`} />
                            </LazyLoad>
                            <p className="title-modelos"><b>{vehicul.name}</b></p>
                          </article>
                        </Link> 
                        
                      );
                    } else {
                      return null
                    }
                  })
                
            }
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Modelos;