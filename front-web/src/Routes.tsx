import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/Component/ProductDetatils';
import Home from './pages/Home';
import Auth from './pages/Auth';
import hsitory from './core/utils/history';


const Routes = () => (
    <Router history={hsitory}>
        <Navbar />
        <Switch>
            <Route path="/" exact >
                <Home></Home>
            </Route>
            <Route path="/products" exact>
                <Catalog></Catalog>
            </Route>
            <Route path="/products/:productId">
                <ProductDetails />
            </Route>
            <Redirect from="/admin/auth" to="/admin/auth/login" exact/>
            <Route path="/admin/auth">
                <Auth />
            </Route>
            <Redirect from="/admin" to="/admin/products" exact/>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
        </Switch>
    </Router>

);

export default Routes;