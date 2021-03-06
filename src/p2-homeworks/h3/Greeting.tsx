import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = s.greetingInput; // need to fix with (?:)
    if(error) {
        inputClass += `${s.error}`
    }

    return (
        <div >
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}/>
            <span>{error}</span>
            <SuperButton red onClick={addUser}
                         className={style.someClass}
            >add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
