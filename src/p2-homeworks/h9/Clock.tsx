import React, {useCallback, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "../h2/Affairs.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }


    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const stringTime = `Time   ${date && date.toLocaleTimeString()}`; // fix with date
    const stringDate = `Date   ${date && date.toLocaleDateString()}`; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton red className={style.someClass} onClick={start}>start</SuperButton>
            <SuperButton red className={style.someClass} onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
