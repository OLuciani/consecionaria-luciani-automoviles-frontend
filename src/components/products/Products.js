import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  /* Hago el fetch con la api del backend que está en el servidor */
  useEffect(() => { 
    fetch('https://consecionaria-luciani-automoviles-backend.onrender.com/api/list')
      .then((res) => res.json())
      .then((allCars) => {
        setProducts(allCars);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <h1 className="text-center title-products">Galería de usados</h1>

        <hr />

        <div className="list-cars">
          
          {
            products.map((product) => { //Uso .map para listar los productos
              //console.log(typeof(product.imageUrl));
              let id = product._id;
              return (
                <Link key={id} to={`/productDetail/${product._id}`}> {/* Uso Link p/ir a productDetail llevando el id.Puse id en Route */}
                  {/* Aquí creo como se va a ver c/producto (automóvil) en el listado*/}
                  <article className="article">
                    <img src={`https://consecionaria-luciani-automoviles-backend.onrender.com${product.imageUrl}`} alt={`Foto ${product.name}`} />
                    <p className="parrafo"><b>{product.name}</b></p>
                  </article>
                </Link>
              );
            })
          }

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;
