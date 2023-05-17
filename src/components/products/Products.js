import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import NavBar1 from "../navBar1/NavBar1";
import Footer from "../footer/Footer";
import "./Products.css";
import SideBar from "../sideBar/SideBar";
import LazyLoad from 'react-lazy-load';

const Products = () => {
  const automovilesUsados = useContext(Context);

  return (
    <div className="box-products">
      <header>
        <NavBar1 />
        <SideBar />
      </header>

      <main>
        <div className="sub-box-products">
          <h1 className="text-center title-products">Galería de usados</h1> 

          <hr /> 

          <div className="list-cars">
  
            {
              (automovilesUsados.products.length < 1) ? <p className="cargando">Cargando Imágenes...</p>:
                automovilesUsados.products.map((product) => { //Uso .map para listar los productos
                    //console.log(typeof(product.imageUrl));
                    let id = product._id;

                    
                    return (
                      <Link key={id} to={`/productDetail/${product._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                        {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                        <article className="articulo-products">
                          <LazyLoad once>
                            <img className="image-products" src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${product.imageUrl}`} loading="lazy" alt={`Foto ${product.name}`} />
                          </LazyLoad>
                          <p className="nombre-producto"><b>{product.name}</b></p>
                        </article>
                      </Link>
                    );
                    
                  })
                
            }

          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Products;
