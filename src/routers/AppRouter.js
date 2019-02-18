import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Navigation} from '../components/Navigation'
import {ExpansDashboard} from '../components/Dashboard'
import {About} from '../components/About'
import {Contact} from '../components/Contact'
import {Profile} from '../components/Profile'
import {NotFound} from '../components/PageNotFound'

const AppRouters = () => (
    <Router>
        <Fragment>
            <header>
                <h2>Expensive application</h2>
            </header>
            <Navigation />
            <Switch>
                <Route path="/" exact component={ExpansDashboard}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profile" component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
        </Fragment>
    </Router>
);

export {AppRouters}