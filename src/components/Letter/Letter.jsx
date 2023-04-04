import { useContext } from 'react';
import { AppContext } from "../../context/AppContext";

const Letter = ({ letterPos, attemptVal }) => {
    const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);
    const letter = board[attemptVal][letterPos]
    return (
        <div>
            { letter }
        </div>
    );
};

export default Letter;
