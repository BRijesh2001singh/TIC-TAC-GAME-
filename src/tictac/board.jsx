import React, { useState } from 'react';
import Square from './square';

const Board = () => {

    const [state, setstate] = useState(Array(9).fill(null));
    const [isXturn, setXturn] = useState(true);

    const handleclick = (index) => {//handles clicks
        const copystate = [...state];
        if (copystate[index] == null) {
            copystate[index] = isXturn ? "X" : "0";
        }
        setstate(copystate);
        setXturn(!isXturn);
    }
    //check winner
    const checkwinner = () => {
        const winningcondition = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ];
        for (let condition of winningcondition) {
            const [a, b, c] = condition;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
                return state[a];
        }
        return null;
    }
    const iswinner = checkwinner();
    // const reset = () => {

    // }
    return (
        <div className="board-container" style={{
            border: "1px solid black",
            display: "flex",
            justifyContents: "space-between",
            alignItems: "center",
        }}>
            {iswinner ? (<><h1 style={{
                color: "white",
                fontWeight: "bolder"
            }}>{iswinner} is winner</h1></>) : (<>
                <div className="container-row">
                    <Square onClick={() => handleclick(0)} value={state[0]} />
                    <Square onClick={() => handleclick(1)} value={state[1]} />
                    <Square onClick={() => handleclick(2)} value={state[2]} />
                </div>
                <div className="container-row">
                    <Square onClick={() => handleclick(3)} value={state[3]} />
                    <Square onClick={() => handleclick(4)} value={state[4]} />
                    <Square onClick={() => handleclick(5)} value={state[5]} />
                </div>
                <div className="container-row">
                    <Square onClick={() => handleclick(6)} value={state[6]} />
                    <Square onClick={() => handleclick(7)} value={state[7]} />
                    <Square onClick={() => handleclick(8)} value={state[8]} />
                </div>
            </>)
            }
        </div>
    );
}
export default Board;
