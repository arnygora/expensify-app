import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, NavLink, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpansDashboard = () => (
    <div>This Is Dashboard Component</div>
);

const About = () => (
    <div>This Is About Component</div>
);
const Contact = () => (
    <div>This Is Contact Component</div>
);
const Profile = () => (
    <div>This Is Profile Component</div>
);
const NotFound = () => (
    <div>404 <Link to='/'>Go Home</Link></div>
);
const Header = () => (
    <header>
        <h2>Expensive application</h2>
        <NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
        <NavLink to='/about' activeClassName='is-active'>About</NavLink>
        <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
        <NavLink to='/profile' activeClassName='is-active'>Profile</NavLink>
    </header>
);


const routes = (
    <Router>
        <Fragment>
            <Header/>
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


ReactDOM.render(routes, document.getElementById('app'));

