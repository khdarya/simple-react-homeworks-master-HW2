import React, {useCallback, useEffect, useState} from 'react'
import {requestAPI} from "./api/RequestAPI";
import Request from "./Request";

const HW13 = () => {

    let [checked, setChecked] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')

    const clickRequest = useCallback(() => {

        requestAPI.getCheckboxRes()
            .then((res) => {
                debugger
                setChecked(res.data.info)
                setSuccess(res.data.info)
            })

            .catch(error => {
                debugger
                setError( error.response ? error.response.data.errorText : error.message)
            })
    }, [checked])

    return (
        <div>
            <Request onClick={clickRequest} checked={checked} error={error} success={success}/>
        </div>

    )
}

export default HW13;


