import { useRef } from "react";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import "./App.css";


import comida1 from "./images/comida1.jpg";
import comida2 from "./images/comida2.jpg";
import comida3 from "./images/comida3.jpg";
import comida4 from "./images/comida4.jpg";
import comida5 from "./images/comida5.jpg";
import comida6 from "./images/comida6.jpg";
import paisaje1 from "./images/paisaje1.jpg";
import paisaje2 from "./images/paisaje2.jpg";
import paisaje3 from "./images/paisaje3.jpg";
import paisaje4 from "./images/paisaje4.jpg";
import paisaje5 from "./images/paisaje5.jpg";
import paisaje6 from "./images/paisaje6.jpg";
import paisaje7 from "./images/paisaje7.jpg";

import urbano1 from "./images/urbano1.jpg";
import urbano2 from "./images/urbano2.jpg";
import urbano3 from "./images/urbano3.jpg";
import urbano4 from "./images/urbano4.jpg";
import urbano5 from "./images/urbano5.jpg";
import urbano6 from "./images/urbano6.jpg";

function App() {

  const [mostrarBoton, setBoton] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll',scrolleado);

    return () => window.removeEventListener('scroll', scrolleado);
  },[] );


  const scrolleado = () => {
    const currentScrollY = window.scrollY;
    const show = currentScrollY > 200;

    setBoton(show);
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  const seccion1 = useRef(null);
  const seccion2 = useRef(null);
  const seccion3 = useRef(null);

  const scrolleo = (parte) => {
    parte.current.scrollIntoView({ behavior: "smooth" });
  };

  const notificacion = () => {
    toast.success('imagen descargada!',{
      position: toast.POSITION.TOP_RIGHT
    });
  }

  return (
    <div>
      
      <h1>las mejores imagenes para tu escritorio!</h1>
      <nav>
        <ul>
          <li className='list'onClick={() => scrolleo(seccion1)}>paisajes</li>
          <li className='list' onClick={() => scrolleo(seccion2)}>comidas</li>
          <li className='list' onClick={() => scrolleo(seccion3)}>urbano</li>
        </ul>
      </nav>

      <h2>paisajes</h2>
      <div className="paisaje" ref={seccion1}>
        <img onClick={notificacion} src={paisaje1} alt="paisaje1"></img>
        <img onClick={notificacion} src={paisaje2} alt="paisaje2"></img>
        <img onClick={notificacion} src={paisaje3} alt="paisaje3"></img>
        <img onClick={notificacion} src={paisaje4} alt="paisaje4"></img>
        <img onClick={notificacion} src={paisaje5} alt="paisaje5"></img>
        <img onClick={notificacion} src={paisaje6} alt="paisaje6"></img>
        <img onClick={notificacion} src={paisaje7} alt="paisaje7"></img>
      </div>

      <h2>comidas</h2>
      <div className="comida" ref={seccion2}>
        <img onClick={notificacion} src={comida1} alt="comida"></img>
        <img onClick={notificacion} src={comida2} alt="comida2"></img>
        <img onClick={notificacion} src={comida3} alt="comida3"></img>
        <img src={comida4} alt="comida4"></img>
        <img onClick={notificacion} src={comida5} alt="comida5"></img>
        <img onClick={notificacion} src={comida6} alt="comida6"></img>
      </div>

      <h2>urbano</h2>
      <div className="urbano" ref={seccion3}>
        <img onClick={notificacion} src={urbano1} alt="urbano1"></img>
        <img onClick={notificacion} src={urbano2} alt="urbano2"></img>
        <img onClick={notificacion} src={urbano3} alt="urbano3"></img>
        <img onClick={notificacion} src={urbano4} alt="urbano4"></img>
        <img onClick={notificacion} src={urbano5} alt="urbano5"></img>
        <img onClick={notificacion} src={urbano6} alt="urbano6"></img>
      </div>
      {mostrarBoton && (
        <button className="scrollTopButton" onClick={scrollToTop}>
          volver al inicio
        </button>
      )}
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />
    </div>
  );
}

export default App;
