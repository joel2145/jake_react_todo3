import { useState } from 'react';
import './App.css';

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  // 入力機能
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value)
  };

  // 追加する関数
  const onClickAdd = () => {
    if (todoText === "") {
      return
    }
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText("");
  };

  // 削除する関数
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // 完了する関数
  const onClickDone = (index) => {
    // TODOリストから削除
    const newIncompleteTodos = [...todos];
    newIncompleteTodos.splice(index, 1);
    setTodos(newIncompleteTodos);
    // 完了リストに追加
    const newDones = [...dones, todos[index]];
    setDones(newDones);
  };

  // 戻す関数
  const onClickReturn = (index) => {
    // 完了リストから削除
    const newDones = [...dones];
    newDones.splice(index, 1);
    setDones(newDones);
    // TODOリストに追加
    const newIncompleteTodos = [...todos, dones[index]];
    setTodos(newIncompleteTodos);
  };

  return (
    <div className="body">

      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

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

    </div >
  );
}

export default App;
