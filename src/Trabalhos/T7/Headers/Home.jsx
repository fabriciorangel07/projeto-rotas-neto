import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_america">     
        <div class="container">
            <div class="row row-cols-5">
                <nav>
                    <ul>
                        <li class="col t1" > <Link to="/America">America</Link> </li>
                        <li class="col t2" > <Link to="#">Asia</Link> </li>
                        <li class="col t3" > <Link to="#">Oceania</Link> </li>
                        <li class="col t4" > <Link to="#">Antartida</Link> </li>
                        <li class="col t5" > <Link to="#">Europa</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

