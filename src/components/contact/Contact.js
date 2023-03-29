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

        <div className='items-contact'>
          <div className='box-p-icon'>
            <i className="bi bi-geo-alt-fill"></i>
            <p>Dirección: Sucre 327 - Ciudad de Córdoba<br/>Argentina.</p>
          </div> 
          <br/>

          <div className='box-p-icon'>
            <i className="bi bi-telephone-fill" />
            <p>Teléfono: 54 9 351 123456</p>
          </div>   
          <br/>
        
          <div className='box-p-icon'>   
            <i className="bi bi-envelope-at-fill" />
            <p>Email: lucianiautomoviles@gmail.com</p>
          </div> 
          <br/>

          <div className='box-p-icon'>
            <i className="bi bi-facebook" /> 
            <p>Facebook</p>
          </div>
          <br/>

          <div className='box-p-icon'>
            <i className="bi bi-instagram" />
            <p>Instagram</p>
          </div>
        </div>

      </main>

      <footer className="footer-contact">
        <Footer />
      </footer>
    </>
  )
}

export default Contact;