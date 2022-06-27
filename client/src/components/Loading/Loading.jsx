import React from 'react';
import style from './Loading.module.css';

export default function Loading() {
    return (
        <div className={style.container}>
            <img src='https://imgur.com/nEk4Ssa.gif' alt="" />
        </div>
    )
}