import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, InitStateType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    //const theme = 'some'; // useSelector

    let theme = useSelector<AppStoreType, InitStateType>(state => state.theme)

    // useDispatch, onChangeCallback

    let dispatch = useDispatch();

    const onChangeThemeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={s[theme.theme]}>
            <hr/>
            <span className={s[theme.theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperRadio
                name={'theme'}
                value={theme.theme}
                options={themes}
                onChangeOption={onChangeThemeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
