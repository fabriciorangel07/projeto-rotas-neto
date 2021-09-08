import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_america">     
        <div class="container">
            <div class="row row-cols-6">
                <nav>
                    <ul>
                        <li class="col t6" > <Link to="/T7">Voltar</Link> </li>
                        <li class="col t1" > <Link to="#">America do Norte</Link> </li>
                        <li class="col t2" > <Link to="#">America do Central</Link> </li>
                        <li class="col t3" > <Link to="/America2">America do Sul</Link> </li>
                        <li class="col t4" > <Link to="#">Equador</Link> </li>
                        <li class="col t5" > <Link to="#">Inferiores</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

