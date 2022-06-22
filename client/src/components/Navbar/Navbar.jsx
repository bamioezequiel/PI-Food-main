import React from "react";
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function NavBar() {
    return (
        <React.Fragment className={style.container}>
            <nav className={style.navbar}>
                <div className={style.items}>
                    <NavLink to='/home' className={style.logo} >Food</NavLink>
                    <NavLink to='/home' className={style.item} >Home</NavLink>
                    <NavLink to='/create' className={style.item} >Create</NavLink>
                </div>
            </nav>
        </React.Fragment>
    )
}