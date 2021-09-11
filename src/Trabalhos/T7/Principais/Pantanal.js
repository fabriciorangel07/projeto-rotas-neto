import React from 'react'


import Header from '../Headers/Pantanal'
import Footer from '../../../Components/Footer'
import Titulo from '../../../Components/Titulo'



export default function Geral() {
    return (
        <div>
            <header>
                <Header />               
            </header>
            <main>
            <div className="container-pantanal">
                <Titulo texto = "Pantanal" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
