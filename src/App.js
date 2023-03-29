import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ProductDetail from './components/productDetail/ProductDetail';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <>
          <BrowserRouter>
            <Routes>
              {/* Rutas para navegar entre las vistas */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/productDetail/:car_id" element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
      </>
    </div>
  );
}

export default App;
