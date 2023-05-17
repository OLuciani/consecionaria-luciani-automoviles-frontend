import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ProductDetail from './components/productDetail/ProductDetail';
import Products from './components/products/Products';
import Modelos from './components/modelos/Modelos';
import Technology from './components/technology/Technology';
import ModelosDetails from './components/modelos/ModelosDetails';
import ExplorarElectricos from './components/explorarElectricos/ExplorarElectricos';
import ContextProvider from './context/Context';

function App() {
  return (
    <div className="App">
      <>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              {/* Rutas para navegar entre las vistas */}
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Modelos />} />
              <Route path="/modelsDetails/:car_id" element={<ModelosDetails />} />
              <Route path="/products" element={<Products />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/productDetail/:car_id" element={<ProductDetail />} />
              <Route path="/exploreElectric" element={<ExplorarElectricos />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>  
      </>
    </div>
  );
}

export default App;
