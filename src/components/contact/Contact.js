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
                   
          <p><i className="bi bi-telephone-fill" /> <b>Teléfono:</b> 54 9 351 123456</p>
          <br/>
        
          <p><i className="bi bi-envelope-at-fill" /> <b>Email:</b> lucianiautomoviles@gmail.com</p>
          <br/>

          <p><i className="bi bi-facebook" /> <b>Facebook</b></p>
          <br/>

          <p><i className="bi bi-instagram" /> <b>Instagram</b></p>

      </main>

      <footer className="footer-contact">
        <Footer />
      </footer>
    </>
  )
}

export default Contact;