import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from './../../redux/actions/index.js';
import style from './CreateRecipe.module.css';

export default function CreateRecipe() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        dishTypes: '',
        image: '',
        healthScore: '',
        summary: '',
        steps: '',
        diets: []
    });
    const diets = useSelector( (state) => state.diets );
    
    useEffect( () => {
        dispatch(getDiets());
    }, [dispatch])

    const handlerChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={style.container}> 
            <div className={style.form_container}>
                <h1 className={style.title}>Create recipe</h1>
                <form>
                    <input type="text" 
                        name="name" 
                        value={input.name} 
                        onChange={ (e) => handlerChange(e) }
                        className={style.input_box} 
                        placeholder="Name..." />
                    <input type="text"
                        name="image" 
                        value={input.image} 
                        onChange={ (e) => handlerChange(e) }
                        className={style.input_box} 
                        placeholder="https://image.png" />
                    <input type="number" 
                        name="healthScore" 
                        value={input.healthScore} 
                        onChange={ (e) => handlerChange(e) }
                        min='0'
                        max='100'
                        className={style.input_box} 
                        placeholder="Health Score..." />

                    <div className={style.form_textarea}>
                        <textarea name="summary" 
                            value={input.summary} 
                            onChange={ (e) => handlerChange(e) }
                            className={style.input_box} 
                            cols="30" rows="10" 
                            placeholder="Summary"></textarea>
                        <textarea name="steps" 
                            value={input.steps} 
                            onChange={ (e) => handlerChange(e) }
                            className={style.input_box} 
                            cols="30" rows="10" 
                            placeholder="Steps"></textarea>
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
            <div className={style.previus_recipe}>
                <div className={style.card}>
                    <img src={input.image} width='300px' alt={input.name} />
                    <h3>Name: {input.name}</h3>
                    <span>Health Score: {input.healthScore}</span>
                    <div className={style.card_textarea}>Summary: {input.summary}</div>
                    <div className={style.card_textarea}>Steps: {input.steps}</div>
                </div>
            </div>
        </div>
    )
}