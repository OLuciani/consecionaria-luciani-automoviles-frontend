import React, {useState, useEffect} from "react";

export const Context = React.createContext({});

export default function ContextProvider({children}) {
    const [vehiculs, setVehiculs] = useState([]);

    useEffect(() => { 
        fetch('https://consecionaria-luciani-automoviles-backend.onrender.com/api/vehiculosList')
          .then((res) => res.json())
          .then((allCars) => {
            setVehiculs(allCars);
          })
          .catch((error) => console.log(error));
      }, []);

      const [products, setProducts] = useState([]);

      useEffect(() => { 
        fetch('https://consecionaria-luciani-automoviles-backend.onrender.com/api/list')
          .then((res) => res.json())
          .then((allCars) => {
            setProducts(allCars);
          })
          .catch((error) => console.log(error));
      }, []);
    


    return (
        <Context.Provider value={{vehiculs, setVehiculs, products,setProducts}}>
            {children}
        </Context.Provider>
    )
}
