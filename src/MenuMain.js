import React from 'react';
import ReactDOM from 'react-dom';
import myFunction from './navigation.js';


const MenuMain = () => {
        return ( 
                <div className="nav">
                <div id="burger" onClick={myFunction}></div>
        <div id="myLinks">

                
                 <a href="#news"><div className="icon-planet mercury"></div> Mercury</a>
    <a href="#contact"><div className="icon-planet venus"></div>Venus</a>
    <a href="#about"><div className="icon-planet earth"></div>Earth</a>
    <a href="#news"><div className="icon-planet mars"></div>Mars</a>
    <a href="#contact"><div className="icon-planet jupiter"></div>Jupiter</a>
    <a href="#about"><div className="icon-planet saturn"></div>Saturn</a>
    <a href="#contact"><div className="icon-planet uranus"></div>Uranus</a>
    <a href="#about"><div className="icon-planet neptun"></div>Neptun</a>
        </div>
        </div>)
        }

        export default MenuMain;