import React from 'react';
import { keys1, keys2, keys3 } from "../../keys";
import Key from "../Key/Key";

const KeyBoard = () => {
    return (
        <div className="keyboard">
            <div className="line1">
                {keys1.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="line2">
                {keys2.map((key) => {
                    return <Key keyVal={key} />;
                })}
            </div>
            <div className="line3">
                <Key keyVal={"ENTER"} bigKey />
                {keys3.map((key) => {
                    return <Key keyVal={key} />;
                })}
                <Key keyVal={"DELETE"} bigKey />
            </div>
        </div>
    );
};

export default KeyBoard;
