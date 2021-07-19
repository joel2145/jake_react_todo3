import React from "react";

export const Todo = (props) => {
    const { todos, onClickDone, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">TODOリスト</p>
            <ul>
                {todos.map((text, index) => {
                    return (
                        <li key={text} className="list-row">
                            <p>{text}</p>
                            <button onClick={() => onClickDone(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};