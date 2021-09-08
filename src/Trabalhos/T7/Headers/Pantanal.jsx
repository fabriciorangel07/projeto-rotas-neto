import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_america">     
        <div class="container">
            <div class="row row-cols-7">
                <nav>
                    <ul>
                        <li class="col t0" > <Link to="/T7">Menu</Link> </li>
                        <li class="col t6" > <Link to="/America2">Voltar</Link> </li>
                        <li class="col t1" > <Link to="#">Hidrografia</Link> </li>
                        <li class="col t2" > <Link to="#">Clima</Link> </li>
                        <li class="col t3" > <Link to="#">Fauna</Link> </li>
                        <li class="col t4" > <Link to="#">Flora</Link> </li>
                        <li class="col t5" > <Link to="#">Desmatamento</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

