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
                        <li class="col t0" > <Link to="/T7">Menu</Link> </li>
                        <li class="col t6" > <Link to="/America">Voltar</Link> </li>
                        <li class="col t1" > <Link to="#">Patagônia</Link> </li>
                        <li class="col t2" > <Link to="#">Cordilheira dos Andes</Link> </li>
                        <li class="col t3" > <Link to="#">Cartagena-Colombia</Link> </li>
                        <li class="col t4" > <Link to="/Pantanal">Pantanal</Link> </li>
                        <li class="col t5" > <Link to="#">Vulção Quilotoa - Equador</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

