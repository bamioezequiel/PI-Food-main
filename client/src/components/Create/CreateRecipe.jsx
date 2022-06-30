import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TypeDiets from "../TypeDiets/TypeDiets.jsx";
import { getDiets, postRecipe } from './../../redux/actions/index.js';
import style from './CreateRecipe.module.css';
import Food404 from './../../assets/404Food.png';

export default function CreateRecipe() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        dishTypes: '',
        steps: '',
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
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    const handleCheck = (e) => {
        const value = e.target.name;
        if(e.target.checked && !input.diets.includes(value)) {
            setInput({
                ...input,
                diets: [...input.diets, value]
            })
        } else {
            setInput({
                ...input,
                diets: input.diets.filter( (d) => d !== value )
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!input.name && !input.summary) {
            alert('Error in required fields');
        } else {
            dispatch(postRecipe(input));
            alert(`Recipe was created successfully`);
            history.push('/home');
        }
    }

    return (
        <div className={style.container}> 
            <div className={style.form_container}>
                <h1 className={style.title}>Create recipe</h1>
                <form>
                    {
                        errors.name && <span className={style.form_message_error}>{errors.name}</span>
                    }
                    <input type="text" 
                        name="name" 
                        value={input.name} 
                        onChange={ (e) => handleChange(e) }
                        className={`${style.input_box} ${errors.name && style.form_error}`} 
                        placeholder="Name..." />
                    {
                        errors.dishTypes && <span className={style.form_message_error}>{errors.dishTypes}</span>
                    }
                    <input type="text" 
                        name="dishTypes" 
                        value={input.dishTypes} 
                        onChange={ (e) => handleChange(e) }
                        className={style.input_box} 
                        placeholder="Dish types..." />
                    <input type="text"
                        name="image" 
                        value={input.image} 
                        onChange={ (e) => handleChange(e) }
                        className={style.input_box} 
                        placeholder="https://image.png" />
                    {
                        errors.healthScore && <span className={style.form_message_error}>{errors.healthScore}</span>
                    }
                    <input type="number" 
                        name="healthScore" 
                        value={input.healthScore} 
                        onChange={ (e) => handleChange(e) }
                        min='0'
                        max='100'
                        className={`${style.input_box} ${errors.healthScore && style.form_error}`} 
                        placeholder="Health Score..." />
                    {
                        errors.summary && <span className={style.form_message_error}>{errors.summary}</span>
                    }
                    <div className={style.form_textarea}>
                        <textarea name="summary" 
                            value={input.summary} 
                            onChange={ (e) => handleChange(e) }
                            className={`${style.input_box} ${errors.summary && style.form_error}`} 
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
                    {
                        (Object.keys(errors).length === 0 && (input.name && input.summary)) 
                        ? <button type="submit" onClick={ (e) => handleSubmit(e) } className={style.button}>Send</button>
                        : null
                    }
                        
                </form>
            </div>
            <div className={style.previus_recipe}>
                <div className={style.card}>
                    <img src={input.image} onError={ (e) => e.target.src = 'https://imgur.com/fqmPwAc.png'} id='img_create' width='300px' alt={input.name} />
                    <h3>Name: {input.name}</h3>
                    <h5>Dish types: {input.dishTypes}</h5>
                    <span>Health Score: {input.healthScore}</span>
                    <div className={style.card_textarea}>Summary: {input.summary}</div>
                    <div className={style.card_textarea}>Steps: {input.steps}</div>
                    <TypeDiets diets={input.diets} />
                </div>
            </div>
        </div>
    )
}

const validate = (input) => {
    let errors = {};
    if(!/^[a-zA-Z\s]{4,50}$/.test(input.name)) {
        errors.name = 'Name is not valid';
    }

    if(input.dishTypes.length > 30) { //fix
        errors.dishTypes = 'Dish types is not valid';
    }

    if(!/^[a-zA-Z0-9_-]{4,200}$/.test(input.summary)) {
        errors.summary = 'Summary is not valid';
    }

    if(!input.healthScore === '') {
        errors.healthScore = 'The health score is not valid';
    }
    else if(input.healthScore < 0 || input.healthScore > 100) {
        errors.healthScore = 'The health score cannot be less than 0 or greater than 100';
    }
    else if(input.healthScore.toString().includes('.')) {
        errors.healthScore = 'The health score cannot be a floating number';
    }
    
    return errors;
}
