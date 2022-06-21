import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";
import NavBar from "../Navbar/Navbar.jsx";
import { getAllRecipes } from './../../redux/actions/index.js';
import style from './Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector( (state) => state.recipes );
    useEffect( () => {
        dispatch(getAllRecipes());
    }, [dispatch]);

    // function handleClick(e) {
    //     e.preventDefault();
    //     dispatch(getAllRecipes());
    // }

    return (
        <React.Fragment>
            <NavBar />
            <Filter />
            {/* <button onClick={e=>{handleClick(e)}}>Reset</button> */}
            <div className={style.container}>
                <Cards recipes={allRecipes} />
            </div>
        </React.Fragment>
    )
}