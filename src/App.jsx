import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import './styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1> Wordle </h1>
      </nav>
      <Board />
      <KeyBoard />
    </div>
  );
}

export default App;
