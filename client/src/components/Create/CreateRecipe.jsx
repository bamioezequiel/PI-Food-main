import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from './../../redux/actions/index.js';
import style from './CreateRecipe.module.css';

export default function CreateRecipe() {
    //traer tipo de dietas
    const dispatch = useDispatch();
    const diets = useSelector( (state) => state.diets );
    useEffect( () => {
        dispatch(getDiets())
    }, [dispatch])
    //[] visualizar en tiempo real la receta creada
    return (
        <div className={style.container}> 
            <div className={style.form_container}>
                <h1 className={style.title}>Create recipe</h1>
                <form>
                    <input type="text" name="name" className={style.input_box} placeholder="Name..." />
                    <input type="text" name="image" className={style.input_box} placeholder="https://image.png" />
                    <input type="number" name="healthScore" className={style.input_box} placeholder="Health Score..." />
                    <div className={style.form_textarea}>
                        <textarea name="summary" className={style.input_box} cols="30" rows="10" placeholder="Summary"></textarea>
                        <textarea name="steps" className={style.input_box} cols="30" rows="10" placeholder="Steps"></textarea>
                    </div>
                    <div className={style.type_diets}>
                        {
                            diets?.map( (d) => (
                                <div key={d.id} className={style.diet}>
                                    <input type="checkbox" name={d.name} id={d.id} />
                                    <label htmlFor={d.id}>{d.name}</label>
                                </div>
                            ))
                        }
                    </div>
                    <button type="submit" className={style.button}>Send</button>
                </form>
            </div>
        </div>
    )
}