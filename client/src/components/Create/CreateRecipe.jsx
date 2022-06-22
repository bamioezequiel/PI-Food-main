import React from "react";

export default function CreateRecipe() {
    return (
        <React.Fragment> 
            <h1>Create recipe</h1>
            <form>
                <input type="text" name="name" placeholder="Name..." />
                <input type="number" name="healthScore" placeholder="Health Score..." />
                <textarea name="resume" cols="30" rows="10"></textarea>
                <textarea name="steps" cols="30" rows="10"></textarea>
                {/* checkbox para seleccionar los tipos de dietas */}
                <input type="submit" value="Send" />
            </form>
        </React.Fragment>
    )
}