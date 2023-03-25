import React from 'react';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className='div-box-contact container-fluid'>
         
           <h2 className='text-center titulo-contact'>Información de contacto</h2>

          <p><b>Dirección:</b> Lagunilla 327. Ciudad de Córdoba. Rep. Argentina</p>
          <br/>

          <div className='box-p-icon'>
            <p><b>Teléfono:</b> 54 9 351 123456</p>
            <i className="bi bi-telephone-fill" />
          </div>   
          <br/>
        
          <div className='box-p-icon'>   
            <p><b>Email:</b> lucianiautomoviles@gmail.com</p>
            <i className="bi bi-envelope-at-fill" />
          </div> 
          <br/>

          <div className='box-p-icon'>
            <p><b>Facebook</b></p>
            <i className="bi bi-facebook" /> 
          </div>
          <br/>

          <div className='box-p-icon'>
            <p><b>Instagram</b></p>
            <i className="bi bi-instagram" />
          </div>

      </main>

      <footer className="footer-contact">
        <Footer />
      </footer>
    </>
  )
}

export default Contact;