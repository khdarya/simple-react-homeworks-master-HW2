import React, {useState} from 'react';
import s from "../p2-homeworks/h12/HW12.module.css";
import SuperRadio from "../p2-homeworks/h7/common/c6-SuperRadio/SuperRadio";

export default {
    title: 'ThemeStories'
}

export const ThemeStories = () => {
    const themes = ['dark', 'red', 'some'];
    const [state, setState] = useState(themes[2])

    return (
        <div className={s[state === 'dark' ? s.dark : s.red]} >
            <span className={s[state + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                options={themes}
                value={state}
                onChangeOption={setState}
            />
        </div>
    )
}

