import React, { useEffect, useState } from 'react';
import "./ProductDetail.css";
import NavBar from "../navBar/NavBar";
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';

const ProductDetail = () => {
  const [car, setCar] = useState([]);

  /* Aquí recupero el id que viene en la url (viene de products) */
  const {car_id} = useParams();

  //console.log(`Id que viene de product: ${car_id}`) //Pruebo si viene el id de products.

  /* Hago el fetch con la api del backend que está en el servidor */
  useEffect(() => {
    fetch(`/api/details/${car_id}`)
      .then(res => res.json())
      .then(oneCar => { 
        return setCar(oneCar)
      })
  },[car_id]);

  return (
    <>
         <NavBar />
        <div className='div-car-details'>
          <h1>Car Details</h1>

          {/* Creo el artículo para ver un solo producto con sus detalles */}
          <article className="article-product-detail">
            <div className='div-image-details'>
              <img className='image-product-details' src={car.imageUrl} alt={`Foto ${car.name}`} />
            </div>
            <p className='p-name'><b>{car.name}</b></p>
            <p><b>Precio:</b> U$S {car.price}</p>
            <p><b>Modelo:</b> {car.model}</p>
          </article>
        </div>

        <div className='div-footer'>
          <Footer />
        </div>
 
    </>
  )
}

export default ProductDetail;