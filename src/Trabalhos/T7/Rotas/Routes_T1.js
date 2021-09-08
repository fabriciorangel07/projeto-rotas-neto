import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../Geral'
import Opcoes from '../Principais/Opcoes'
import America from '../Principais/America'
import America2 from '../Principais/America2'
import Pantanal from '../Principais/Pantanal'


function RoutesTrab() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/T7" component={Opcoes} />
                <Route exact path="/America" component={America} />
                <Route exact path="/America2" component={America2} />
                <Route exact path="/Pantanal" component={Pantanal} />
            </Switch>
        </BrowserRouter>


    );
}

export default RoutesTrab;