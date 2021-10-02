import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import Home from './pages/Home';
import Membership1 from './pages/membership/Membership1';
// import Checkout from './pages/Checkout';
// import Payment from './pages/Payment';
// import Profile from './pages/Profile';
// import Categories from './pages/Categories';

function Routes () {
    return(
        
        <BrowserRouter>
            <Switch>
                {/* <h1>'Hello World'</h1> */}
                <Route path="/membership1" exact component={Membership1} />
                {/* <Route path="/product/:id" component={Product} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/payment" component={Payment} />
                <Route path="/profile" component={Profile} />
                <Route path="/categories/electronics" render={(props) => {
                    return <Categories category='electronics' {...props}/>
                }} />
                <Route path="/categories/jewelery" render={(props) => {
                    return <Categories category='jewelery' {...props}/>
                }} />
                <Route path="/categories/men-clothing" render={(props) => {
                    return <Categories category="men's clothing" {...props}/>
                }} />
                <Route path="/categories/women-clothing" render={(props) => {
                    return <Categories category="women's clothing" {...props}/>
                }} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;