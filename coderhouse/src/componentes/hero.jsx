import React from "react";
import '../hojas-de-estilo/hero.css'
import zapa1 from '../img/zapatillas-1.png' 
import zapa2 from '../img/zapatillas-2.png' 
import zapa3 from '../img/zapatillas-3.png' 

function Hero (){
    return(
        <>
        <section id="hero">
                 <img src={zapa1} alt="zapatilla 1"/> 
        
        <div className="title">
                 <h1>Lorem ipsum dolor sit amet <br />
                  consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br />
                 adipisicing elit. Dolores, consectetur?</p>
                 </div>
                 </section>
        </>
        
    )
}

export default Hero