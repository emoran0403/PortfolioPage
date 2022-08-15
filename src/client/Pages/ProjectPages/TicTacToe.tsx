import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";

const TicTacToe = (props: Types.TicTacToeProps) => {
  const nav = useNavigate();
  return (
    <div>
      <h1 className="text-center">Tic Tac Toe Lab</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-sm my-2"
          onClick={() => {
            nav(`/`);
          }}
        >
          Main page
        </button>
      </div>

      <div>
        <div>
          <h3>Overview</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Challenges</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Tech Stack</h3>
          <p>text here</p>
        </div>
        <div>
          <h3>Features</h3>
          <p>text here</p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
