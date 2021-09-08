import React from 'react'

import Header from '../Headers/Americadosul'
import Footer from '../../../Components/Footer'
import Titulo from '../../../Components/Titulo'



export default function Geral() {
    return (
        <div>
            <header>
                <Header />               
            </header>
            <main>
            <div className="container-geral">
                <Titulo texto = "America do Sul" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
