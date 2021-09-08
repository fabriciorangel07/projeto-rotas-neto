import React from 'react'

import Header from '../Headers/Americas'
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
                <Titulo texto = "Americas" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
