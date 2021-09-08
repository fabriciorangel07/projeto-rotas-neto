import React from 'react';
import { Link } from 'react-router-dom'

import './footer.css';
import ImgInsta from '../img/instagram.png'
import ImgGit from '../img/github.jpg'


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