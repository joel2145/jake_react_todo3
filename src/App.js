import { useState } from 'react';
import './App.css';

import { InputTodo } from "./components/inputTodo";
import { Todo } from "./components/todo";
import { Done } from "./components/done";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  // 入力する関数
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

      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />

      <Todo todos={todos} onClickDone={onClickDone} onClickDelete={onClickDelete} />

      <Done dones={dones} onClickReturn={onClickReturn} />

    </div >
  );
}

export default App;
