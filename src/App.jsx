import { useState } from "react";
import Board from "./components/Board/Board";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { AppContext } from "./context/AppContext";
import { boardDefault } from "./words";
import './styles/App.css';

const App = () => {
    const [board, setBoard] = useState(boardDefault)

    return (
        <div className='App'>
          <nav>
            <h1> Wordle </h1>
          </nav>
            <AppContext.Provider value={{
                board,
                setBoard
            }}>
              <Board />
              <KeyBoard />
            </AppContext.Provider>
        </div>
  );
}

export default App;
