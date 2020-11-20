import React from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type RequestType = {
    onClick: () => void
    checked: boolean
    error: string
    success: string
}

export const Request = (props: RequestType) => {
debugger
    const onClick = () => {
        props.onClick();
    }
    return (
        <div>

            <SuperButton red onClick={onClick}>Request</SuperButton>
            <SuperCheckbox checked={props.checked}/>

            <div>{props.error}</div>
            <div>{props.success}</div>
        </div>
    )

}
export default Request;