import React, { useState } from 'react';

function Square({value, onSquareClick }) {
  return (
    <button
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick = { () => onSquareClick()}
    >
      <div>{value}</div>
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  function handleClick(i) {
    const nextSquares = squares.slice();
    console.log(nextSquares, '이전값')
    nextSquares[i] = "X"
    console.log(nextSquares,'이후값')
    setSquares(nextSquares)
  }
  return (
    <div style={{marginTop:'200px', marginLeft: '200px'}}>
      <div className="board-row" style={{ display: 'flex' }}>
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row" style={{ display: 'flex' }}>
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row" style={{ display: 'flex' }}>
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}
