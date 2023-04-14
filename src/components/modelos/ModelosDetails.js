import React, { useEffect, useState } from 'react';
import "./ModelosDetails.css";
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar1 from '../navBar1/NavBar1';
import SideBar from '../sideBar/SideBar';

const ModelosDetails = () => {
  const [car, setCar] = useState([]);

  /* Aquí recupero el id que viene en la url (viene de products) */
  const {car_id} = useParams();

  //console.log(`Id que viene de product: ${car_id}`) //Pruebo si viene el id de products.

  /* Hago el fetch con la api del backend que está en el servidor */
  useEffect(() => {
    fetch(`https://consecionaria-luciani-automoviles-backend.onrender.com/api/vehiculosDetails/${car_id}`)
      .then(res => res.json())
      .then(oneCar => { 
        return setCar(oneCar)
      })
  },[car_id]);

  return (
    <div  className='box-body'>
      <NavBar1 />
      <SideBar />
      <div className='box-main'>
        <h5 className='name-model text-center'><b>{car.name}</b></h5>

        <div className='container-articles'>

          <div className='container-article1'>
            <article className='article1-model-detail'>
              <img className='image-model-details' src={`https://consecionaria-luciani-automoviles-backend.onrender.com${car.imageUrl}`} alt={`Foto ${car.name}`} />
            </article>
          </div>

          <div className='container-article2'>         
            <article className='article2-model-detail'>
              <p className='p-precio'><b>Precio:</b> U$S {car.price}</p>
              <p><b>Color:</b> {car.color}</p>
              <p><b>Aceleración:</b> {car.aceleration}</p>
              <p><b>Caballos de fuerza:</b> {car.power}</p>
              <p><b>Torque:</b> {car.torque}</p>
              {
                car.category === "Eléctrico"
                  ? <>
                      <p><b>Capacidad/Batería:</b> {car.batery_capacity}</p>
                      <p><b>Rango eléctrico:</b> {car.electric_range}</p>
                    </>
                  : null
              }
            </article>
          </div>
          
        </div>

        <p className='texto-model-detail'>Te está esperando !!<br/>LLegate a nuestro local, lo probás y si es de tu agrado te lo llevás.<br/>Financiación a medida.</p> 
      </div>

      <div className='div-footer'>
        <Footer />
      </div>
 
    </div>
  )
}

export default ModelosDetails;


