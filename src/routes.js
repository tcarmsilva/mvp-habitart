import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import Home from './pages/Home';
import Membership1 from './pages/membership/Membership1';
import Membership2 from './pages/membership/Membership2';
import Membership3 from './pages/membership/Membership3';
import Membership4 from './pages/membership/Membership4';
import Membership5 from './pages/membership/Membership5';
import Membership6 from './pages/membership/Membership6';
import Membership7 from './pages/membership/Membership7';
import Membership8 from './pages/membership/Membership8';
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
                <Route path="/membership2" exact component={Membership2} />
                <Route path="/membership3" exact component={Membership3} />
                <Route path="/membership4" exact component={Membership4} />
                <Route path="/membership5" exact component={Membership5} />
                <Route path="/membership6" exact component={Membership6} />
                <Route path="/membership7" exact component={Membership7} />
                <Route path="/membership8" exact component={Membership8} />
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