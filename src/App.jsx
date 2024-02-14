import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Home from "./Views/Home/Home.jsx";
import Menu from "./Views/Menu/Menu.jsx";
import Booking from "./Views/Booking/Booking.jsx";
import About from "./Views/About/About.jsx";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
