import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe, getRecipeById } from './../../redux/actions/index.js';
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import style from './DetailsRecipe.module.css';
import Error404 from "../404/Error404.jsx";

export default function DetailsRecipe() {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();
    let recipe = useSelector( (state) => state.recipe );

    useEffect( async () => {
        await dispatch(getRecipeById(id));
        setLoading(false);
    }, [dispatch, id]);

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteRecipe(recipe.id));
        alert(`Recipe was deleted successfully`);
        history.push('/home');
    }
     
   return (
    (loading) 
    ? <Loading /> 
    : (Object.keys(recipe).length) 
        ? <div className={style.container}>
        {
            recipe.createInDB && <div>
                <button onClick={ (e) => handleDelete(e) } className={style.btn_delete}>
                    <img src='https://imgur.com/aj8PEHd.png' alt="delete not found" />
                </button>
                <NavLink to={`/home/create/${id}`}  className={style.btn_update}>
                    <img src="https://imgur.com/qV1MFWh.png" alt="update not found" />
                </NavLink>
            </div>
        }
        <h1 className={style.title}> {recipe.name} </h1>
        {
            recipe.dishTypes && <h3 className={style.title}>{recipe.dishTypes}</h3>
        }
        <h5>Health score: {recipe.healthScore}</h5>
        <img src={recipe.image} onError={ (e) =>  e.target.src = 'https://imgur.com/fqmPwAc.png'} className={style.image} alt={`${recipe.name} not found`} />
        <h2>Summary:</h2>
        <p className={style.summary}> {recipe.summary} </p>
        {
            style.steps && <h2>Steps:</h2>
        }
        <div className={style.steps}>
            {
                (typeof recipe.steps === 'string')
                ? <p className={style.step}>{recipe.steps}</p>
                : <ol>{
                        recipe.steps?.map( (el, i) => <li key={i} className={style.step}><p>{el}</p></li> )}</ol>
            }
        </div>
    </div>
        : <Error404/>
   )
}