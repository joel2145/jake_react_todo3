import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">TODOリスト</p>
        <ul>
          <li className="list-row">
            <p>ああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="list-row">
            <p>いいいい</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了リスト</p>
        <ul>
          <li className="list-row">
            <p>ううううう</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </body>
  );
}

export default App;
