import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}; // need to fix
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div >

            {mappedAffairs}
            <SuperButton red onClick={setAll} className={style.someClass} >All</SuperButton>
            <SuperButton red onClick={setHigh} className={style.someClass} >High</SuperButton>
            <SuperButton red onClick={setMiddle} className={style.someClass} >Middle</SuperButton>
            <SuperButton red onClick={setLow} className={style.someClass} >Low</SuperButton>

        </div>
    );
}

export default Affairs;
