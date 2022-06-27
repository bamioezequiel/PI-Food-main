import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from './../../redux/actions/index.js';
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import Food404 from './../../assets/404Food.png';
import style from './DetailsRecipe.module.css';

export default function DetailsRecipe() {
    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    let recipe = useSelector( (state) => state.recipe );
    useEffect( async () => {
        await dispatch(getRecipeById(id));
        setLoading(true);
    }, [dispatch, id]);
     
   return (
    !loading ? <Loading /> :<div className={style.container}>
        <NavLink to='/home' className={style.back}>X</NavLink>
        <h1 className={style.title}> {recipe.name} </h1>
        {
            recipe.dishTypes && <h3>{recipe.dishTypes}</h3>
        }
        <h5>Health score: {recipe.healthScore}</h5>
        <img src={recipe.image ? recipe.image : Food404} className={style.image} alt={`${recipe.name} not found`} />
        <h2>Summary:</h2>
        <p className={style.summary}> {recipe.summary} </p>
        {
            style.steps && <h2>Steps:</h2>
        }
        <div className={style.steps}>
            {
                typeof recipe.steps === 'string'
                ? <p className={style.step}>{recipe.steps}</p>
                : <ol>{recipe.steps?.map( (el, i) => <li key={i} className={style.step}>{el}</li> )}</ol>
                
            }
        </div>
    </div>
   )
}