import React from "react";

export const Done = (props) => {
    const { dones, onClickReturn } = props;
    return (
        <div className="complete-area">
            <p className="title">完了リスト</p>
            <ul>
                {dones.map((text, index) => {
                    return (
                        <li key={text} className="list-row">
                            <p>{text}</p>
                            <button onClick={() => onClickReturn(index)}>戻す</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};