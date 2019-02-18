import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <Fragment>
        <NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
        <NavLink to='/about' activeClassName='is-active'>About</NavLink>
        <NavLink to='/contact' activeClassName='is-active'>Contact</NavLink>
        <NavLink to='/profile' activeClassName='is-active'>Profile</NavLink>
    </Fragment>
);

export {Navigation}