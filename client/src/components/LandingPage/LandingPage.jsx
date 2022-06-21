import React from "react";
import { NavLink } from "react-router-dom";
import style from './LandingPage.module.css';
import logo from './../../assets/logo.png';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div className={style.body}>
                <div className={style.container}>
                    <img src={logo} className={style.logo} alt="logo not found" />
                    <NavLink to='/home' className={style.button} >Start</NavLink>
                </div>
            </div>
        )
    }
}