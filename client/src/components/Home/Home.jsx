import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../Card/Card.jsx";
import Filter from "../Filter/Filter.jsx";
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
            <Filter />
            {/* <button onClick={e=>{handleClick(e)}}>Reset</button> */}
            <div className={style.container}>
                <div className={style.cards}>
                {
                    allRecipes?.map( (el) => {
                        return <Card key={el.id} id={el.id} name={el.name} image={el.image} diets={el.diets}/>
                    })
                }
                </div>  
            </div>
        </React.Fragment>
    )
}