import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherDetails } from "./pages/weatherDetails/WeatherDetails";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name/forecast" element={<WeatherDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

