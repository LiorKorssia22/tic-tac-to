import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const rowStyle = {
  display: 'flex'
}

const boxStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const messageStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square() {
  return (
    <div
      className="square"
      style={boxStyle}>
    </div>
  );
}


function Board() {

  return (
    <div style={containerStyle} className="tttBoard">
      <div id="statusArea" className="status" style={messageStyle}>Current player: <span>X</span></div>
      <div id="winnerArea" className="winner" style={messageStyle}>Winner: <span>None</span></div>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {/* <Square onClick={() => markSquare(0)}/> */}
          <Square />
          <Square />
        </div>
      <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
         <div className="board-row" style={rowStyle}>
          <Square />
          <Square />
          <Square />
        </div>
       
      </div>
      <button style={buttonStyle}>Reset</button>

    </div>
  );
}

function TicTacToe() {
  return (
    <div className="ttt">
      <div className="ttt-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('root')
);

