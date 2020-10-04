import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import {useSelector, useDispatch} from 'react-redux';
import style from './Loading.module.css';

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    const dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        // setTimeout

        dispatch(loadingAC(true));

        setTimeout(() => {
            dispatch(loadingAC(false))}, 2000)

        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading ? (
                    <div className={style.loader}></div>
                ) : (
                    <div>
                        <SuperButton red onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
