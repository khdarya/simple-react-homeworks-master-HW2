import React from "react";
import style from './Message.module.css';

type MessagePropsType = {
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.appWrapper}>
            <div className={style.ava}>
                <img src='https://sun9-47.userapi.com/c637221/v637221676/40f6/NOdUcMP2TRk.jpg'/>
            </div>
            <div className={style.textfield}>
                <div className={style.item1}>{props.name}</div>
                <div className={style.item2}>{props.message}</div>
                <div className={style.item3}>{props.time} </div>
            </div>
        </div>
    );
}

export default Message;
