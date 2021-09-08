import React from 'react'

import './Geral.css'
import Header from '../Trabalhos/T7/Principais/Opcoes.js'
import Footer from '../Components/Footer.js'
import Titulo from '../Components/Titulo.js'
export default function Geral() {
    return (
        <div>
            <header>
                <Header />               
            </header>
            <main>
            <div className="container-geral">
                <Titulo texto = "Américas" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
