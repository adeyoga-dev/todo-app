import React, { useState } from 'react';
import Counting from 'counting';
import TicTacToe from 'tictactoe';

function App() {
  const [isTicTacToeVisible, setIsTicTacToeVisible] = useState(true);

  const toggleView = () => {
    setIsTicTacToeVisible(!isTicTacToeVisible);
  };

  return (
    <div>
      <button onClick={toggleView}>Toggle View</button>
      {isTicTacToeVisible ? <TicTacToe /> : <Counting />}
    </div>
  );
}
