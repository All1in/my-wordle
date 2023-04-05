import { useState } from "react";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { AppContext } from "./context/AppContext";
import { boardDefault } from "./words";
import './styles/App.css';

const App = () => {
    const [board, setBoard] = useState(boardDefault)
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    return (
        <div className='App'>
          <nav>
            <h1> Wordle </h1>
          </nav>
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    currAttempt,
                    setCurrAttempt,
                    correctWord,
                    setDisabledLetters,
                    disabledLetters,
                    gameOver,
                }}
            >
              <Board />
              <KeyBoard />
            </AppContext.Provider>
        </div>
  );
}

export default App;
