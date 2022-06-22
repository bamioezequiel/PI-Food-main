import React from "react";
import icon from './../../assets/search.png'
import style from './Filter.module.css'

export default function Filter() {
    return (
        <div className={style.container} >
            <div className={style.container_filter}>
                <select className={style.filter}>
                    <option value="test">Test</option>
                    <option value="test">Test</option>
                    <option value="test">Test</option>
                </select>
                <select className={style.filter}>
                    <option value="test">Test</option>
                    <option value="test">Test</option>
                    <option value="test">Test</option>
                </select>
            </div>

            <div className={style.container_search}>
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

            <div className={style.container_paginated}>
                <button>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                <button>+</button>
            </div>
        </div>
    )
}