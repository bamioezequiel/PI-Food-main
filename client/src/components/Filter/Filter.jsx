import React from "react";
import icon from './../../assets/search.png'
import style from './Filter.module.css'

export default function Filter() {
    return (
        <React.Fragment>
            <div className={style.container}>
                <table className={style.elements}>
                    <tr>
                        <td>
                            <input type="text" className={style.search} placeholder='Search' />
                        </td>
                        <td>
                            <a href="#"><img src={icon} className={style.icon} /></a>
                        </td>
                    </tr>
                </table>
            </div>
        </React.Fragment>
    )
}