import React, {useCallback, useState} from "react";
import {CheckAC, homeWorkReducer, peopleType, SortAC} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople: Array<peopleType> = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<peopleType>>(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}
        </div>
    ))

    const sortUp = useCallback(() => {
        setPeople(homeWorkReducer(initialPeople, SortAC("up")));
        setPeople([...people]);
    }, [initialPeople])

    const sortDown = useCallback(() => {
        setPeople(homeWorkReducer(initialPeople, SortAC("down")));
        setPeople([...people]);
    }, [initialPeople])

    const filterEighteen = useCallback(() => {
        setPeople(homeWorkReducer(initialPeople, CheckAC(18)));

    }, [initialPeople])

    return (
        <div>
            <hr/>
            homeworks 8
            <p></p>
            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton red onClick={sortUp}>Sort Up</SuperButton></div>
            <div><SuperButton red onClick={sortDown}>Sort Down</SuperButton></div>
            <div><SuperButton red onClick={filterEighteen}>18+</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
