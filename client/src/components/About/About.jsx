import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from './About.module.css';

export default function About() {

    const countAllRecipes = useSelector((state) => state.allRecipes.length);
    const [lenguage, setLenguage] = useState('ES');
    const handleClick = (e) => {
        e.preventDefault();
        if(lenguage === 'ES') {
            setLenguage('EN');
        } else {
            setLenguage('ES');
        }
    }

    return (
        <div className={style.container}>
            {
                (lenguage === 'ES')
                ? <div className={style.container_about}>
                    <div className={style.container_title}>
                        <button className={style.lenguage} onClick={ (e) => handleClick(e) }>{lenguage}</button>
                        <h1 className={style.title}>Food</h1>
                    </div>
                    <p className={style.description}>
                        Food es una aplicación web de recetas de cocinas. Tiene filtrados por tipos de dietas, ordenamientos por alfabeto y health score. En el boton 'more' de la carta, se podra ver el detalle de dicha receta. Se podra editar o eliminar solo las recetas creadas.
                        Se puede crear una nueva receta en el apartado 'Create Recipe', adentro se podra apreciar una carta de visualización mientras se llenando los datos de la receta. El boton aparecera solo cuando se llenen los campos requeridos (*).
                    </p>
                    
                    <h4>Recetas actuales:</h4>
                    <div className={style.box}>
                        <span className={style.counter}>{countAllRecipes}</span>
                    </div>

                    <h4>Herramientas utilizadas</h4>
                    <div className={style.tools}>
                        JavaScript,
                        React Js,
                        Redux,
                        HTML,
                        CSS,
                        Node Js,
                        Express,
                        PostgreSQL,
                        Sequelize
                    </div>
                    <div className={style.social}>
                        <a href="https://www.linkedin.com/in/ezequielbamio/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/linkedin.png" alt="Linkedin" /></a>
                        <a href="https://github.com/bamioezequiel/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/github.png" alt="Github" /></a>
                    </div>
                    <small className={style.dev}>Diseñado por Bamio Ezequiel</small>
                </div>
                : <div className={style.container_about}>
                <div className={style.container_title}>
                    <button className={style.lenguage} onClick={ (e) => handleClick(e) }>{lenguage}</button>
                    <h1 className={style.title}>Food</h1>
                </div>
                <p className={style.description}>
                    Food is a web application for cooking recipes. It has filters by types of diets, sorts by alphabet and health score. In the 'more' button of the menu, you can see the details of that recipe. You can edit or delete only the created recipes.
                    A new recipe can be created in the 'Create Recipe' section, inside you will be able to see a visualization letter while the recipe data is filled. The button will appear only when the required fields are filled in (*).
                </p>
                
                <h4>Current recipes:</h4>
                <div className={style.box}>
                    <span className={style.counter}>{countAllRecipes}</span>
                </div>

                <h4>Used tools</h4>
                <div className={style.tools}>
                    JavaScript,
                    React Js,
                    Redux,
                    HTML,
                    CSS,
                    Node Js,
                    Express,
                    PostgreSQL,
                    Sequelize
                </div>
                <div className={style.social}>
                    <a href="https://www.linkedin.com/in/ezequielbamio/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/linkedin.png" alt="Linkedin" /></a>
                    <a href="https://github.com/bamioezequiel/" target='_black'><img src="https://img.icons8.com/stickers/65/000000/github.png" alt="Github" /></a>
                </div>
                <small className={style.dev}>Desing by Bamio Ezequiel</small>
            </div>
            }
        </div>    
    )
}