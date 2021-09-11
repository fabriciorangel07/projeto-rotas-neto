import React from 'react';
import { Link } from 'react-router-dom'

import './footer.css';

function Footer() {
  return (

  <div className="footer">
        <ul className="ulfooter" >
            <li><Link to="/">Inicio</Link></li>
            <li>Sobre</li>
            <li>Mais Informações</li>
        </ul>
   </div>    
  )
}

export default Footer;