import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/ProductDetatils';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Route path="/" exact >
                <Home></Home>
            </Route>
            <Route path="/products" exact>
                <Catalog></Catalog>
            </Route>
            <Route path="/products/:productId">
                <ProductDetails/>
            </Route>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;