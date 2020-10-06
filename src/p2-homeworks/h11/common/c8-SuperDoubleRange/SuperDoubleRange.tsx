import React from "react";
import {Slider} from "@material-ui/core";
import style from '../c7-SuperRange/SuperRange.module.css';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: number[]
    // min, max, step, disable, ...

}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {onChangeRange, value, ...restProps}
) => {


    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }

    return (
        <div className={style.doubleRange}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
