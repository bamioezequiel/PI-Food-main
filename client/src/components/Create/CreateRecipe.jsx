import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, postRecipe } from './../../redux/actions/index.js';
import style from './CreateRecipe.module.css';

export default function CreateRecipe() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        dishTypes: '',
        steps: [],
        image: '',
        diets: []
    });
 
    const diets = useSelector( (state) => state.diets );
    
    useEffect( () => {
        dispatch(getDiets());
    }, [dispatch])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleCheck = (e) => {
        const value = e.target.name;
        if(e.target.checked && !input.diets.includes(value)) {
            setInput({
                ...input,
                diets: [...diets, value]
            })
        } else {
            let i = input.diets.indexOf(value);
            setInput({
                ...input,
                diets: input.diets.splice(i, 1)
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await dispatch(postRecipe(input));
        alert(`"${res.payload.name}" was created successfully`);
    }

    return (
        <div className={style.container}> 
            <div className={style.form_container}>
                <h1 className={style.title}>Create recipe</h1>
                <form>
                    <input type="text" 
                        name="name" 
                        value={input.name} 
                        onChange={ (e) => handleChange(e) }
                        className={style.input_box} 
                        placeholder="Name..." />
                    <input type="text"
                        name="image" 
                        value={input.image} 
                        onChange={ (e) => handleChange(e) }
                        className={style.input_box} 
                        placeholder="https://image.png" />
                    <input type="number" 
                        name="healthScore" 
                        value={input.healthScore} 
                        onChange={ (e) => handleChange(e) }
                        min='0'
                        max='100'
                        className={style.input_box} 
                        placeholder="Health Score..." />

                    <div className={style.form_textarea}>
                        <textarea name="summary" 
                            value={input.summary} 
                            onChange={ (e) => handleChange(e) }
                            className={style.input_box} 
                            cols="30" rows="10" 
                            placeholder="Summary"></textarea>
                        <textarea name="steps" 
                            value={input.steps} 
                            onChange={ (e) => handleChange(e) }
                            className={style.input_box} 
                            cols="30" rows="10" 
                            placeholder="Steps"></textarea>
                    </div>

                    <div className={style.type_diets}>
                        {
                            diets?.map( (d) => (
                                <div key={d.id} className={style.diet}>
                                    <input type="checkbox" onChange={ (e) => handleCheck(e) } name={d.name} id={d.id} />
                                    <label htmlFor={d.id}>{d.name}</label>
                                </div>
                            ))
                        }
                    </div>
                   
                    <button type="submit" onClick={ (e) => handleSubmit(e) } className={style.button}>Send</button>
                   
                </form>
            </div>
            <div className={style.previus_recipe}>
                <div className={style.card}>
                    <img src={input.image} width='300px' alt={input.name} />
                    <h3>Name: {input.name}</h3>
                    <span>Health Score: {input.healthScore}</span>
                    <div className={style.card_textarea}>Summary: {input.summary}</div>
                    <div className={style.card_textarea}>Steps: {input.steps}</div>
                    {
                        input.diets?.map( (d,i) => <span key={d}>{d}</span> )
                    }
                </div>
            </div>
        </div>
    )
}