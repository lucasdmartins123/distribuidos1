import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Axios/Api";
import { Navigate, useNavigate } from "react-router-dom";

const ReadWriteContext = createContext();
const ReadWriteProvider = ({ children }) => {
  const [carsList, setCarsList] = useState([]);
  const [carDetails, setCarDetails] = useState({});
  const navigate = useNavigate();

  async function loadCars() {
    try {
      const { data } = await api.get("/cars");
      setCarsList(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadCarDetails(carId) {
    try {
      const { data } = await api.get(`myvacancies/${carId}`);
      setCarDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function carRegister(carData) {
    try {
      await api.post("cars", carData);
      loadCars();
      alert("Carro adicionado");
      navigate("/read");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);
  return (
    <ReadWriteContext.Provider
      value={{
        carRegister,
        loadCarDetails,
        loadCars,
        carsList,
        carDetails,
      }}
    >
      {children}
    </ReadWriteContext.Provider>
  );
};

export { ReadWriteContext, ReadWriteProvider };
