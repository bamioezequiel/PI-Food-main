import React from "react";
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function NavBar() {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div className={style.items}>
                    <NavLink to='/home' className={style.logo}>Food</NavLink>
                    <NavLink to='/home' className={style.item}>Home</NavLink>
                    <NavLink to='/home/create' className={`${style.item} ${style.item_create}`}>
                        Create Recipe
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}