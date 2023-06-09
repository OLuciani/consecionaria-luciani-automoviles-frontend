import React, { useContext } from 'react';
import { Context } from "../../context/Context";
import "./ProductDetail.css";
//import NavBar from "../navBar/NavBar";
import { useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar1 from '../navBar1/NavBar1';
import SideBar from '../sideBar/SideBar';

const ProductDetail = () => {
 /*  const [car, setCar] = useState([]); */

  //Aquí recupero el id que viene en la url (viene de products) 
  /* const {car_id} = useParams(); */

  //console.log(`Id que viene de product: ${car_id}`) //Pruebo si viene el id de products.

  //Hago el fetch con la api del backend que está en el servidor 
 /*  useEffect(() => {
    fetch(`https://consecionaria-luciani-automoviles-backend.onrender.com/api/details/${car_id}`)
      .then(res => res.json())
      .then(oneCar => { 
        return setCar(oneCar)
      })
  },[car_id]); */

  const {car_id} = useParams();
  console.log(`Id que viene de product: ${car_id}`); 

  const automovilesUsados = useContext(Context);

  let car = automovilesUsados.products.find((product) =>  product._id === car_id); 

  return (
    <>
      <header>
        <NavBar1 />
        <SideBar />
      </header>
      
      <main>
        <div className='div-car-details'>
          {/* Creo el artículo para ver un solo producto con sus detalles */}
          <article className="article-product-detail">
            <div className='div-image-details'>
              <img className='image-product-details' src={`https://consecionaria-luciani-automoviles-backend.onrender.com/${car.imageUrl}`} alt={`Foto ${car.name}`} />
            </div>
            <p className='p-name'><b>{car.name}</b></p>
            <p><b>Precio:</b> U$S {car.price}</p>
            <p><b>Modelo:</b> {car.model}</p>
          </article>

          <p className='texto-product-detail'>Te está esperando !!<br/>LLegate a nuestro local, lo probás y si es de tu agrado te lo llevás.<br/>Financiación a medida.</p>
        </div>
      </main>

      <footer>
        <div className='div-footer'>
          <Footer />
        </div>
      </footer>

    </>
  )
}

export default ProductDetail;