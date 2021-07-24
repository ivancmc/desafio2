import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './view/Home';
import Clients from './view/Clients';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/clients' component={Clients} />
            </Switch>
        </BrowserRouter>
    )
}