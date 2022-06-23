import React from "react";
import style from './CreateRecipe.module.css';

export default function CreateRecipe() {
    //traer tipo de dietas
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
                        {/* checkbox para seleccionar los tipos de dietas */}
                        <input type="checkbox" name="test" id="" />
                        <label name="test">test</label>
                    </div>
                    <button type="submit" className={style.button}>Send</button>
                </form>
            </div>
        </div>
    )
}