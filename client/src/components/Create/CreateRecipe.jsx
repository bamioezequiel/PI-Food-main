import React from "react";
import style from './CreateRecipe.module.css';

export default function CreateRecipe() {
    return (
        <div className={style.container}> 
            <div className={style.form_container}>
                <h1 className={style.title}>Create recipe</h1>
                <form>
                    <input type="text" name="name" className={style.input_box} placeholder="Name..." />
                    <input type="number" name="healthScore" className={style.input_box} placeholder="Health Score..." />
                    <div className={style.form_textarea}>
                        <textarea name="summary" className={style.input_box} cols="30" rows="10" placeholder="Summary"></textarea>
                        <textarea name="steps" className={style.input_box} cols="30" rows="10" placeholder="Steps"></textarea>
                    </div>
                    {/* checkbox para seleccionar los tipos de dietas */}
                    <input type="submit" className={style.input_button} value="Send" />
                </form>
            </div>
        </div>
    )
}