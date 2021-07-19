import { useState } from 'react';
import './App.css';

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState(["宿題", "買い物"]);
  const [dones, setDones] = useState(["洗濯", "掃除"]);

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
          {dones.map((text) => {
            return (
              <li key={text} className="list-row">
                <p>{text}</p>
                <button>戻す</button>
              </li>
            )
          })}
        </ul>
      </div>

    </div >
  );
}

export default App;
