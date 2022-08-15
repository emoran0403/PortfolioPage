import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";
import { TicTacToeDetails } from "../../../ProjectInfo";

const TicTacToe = (props: Types.TicTacToeProps) => {
  const nav = useNavigate();
  return (
    <div className="my-4">
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

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3>Overview</h3>
              <p>
                Your basic Tic Tac Toe, Noughts and Crosses, or X's and O's game. Clicking in a square places the symbol for the current player. Every turn the
                game checks for a winner, or when the board is full, displays Draw! When the game is over, there is an option to reset the board and play again.
              </p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Features</h3>
              <p>text here</p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3>Challenges</h3>
              <p>
                This was one of the first labs in the course that brought together the concepts taught in HTML, CSS, and JS, with a healthy dose of "If you
                don't know it, google it". One of the small things not explicitly covered (and the most difficult part about this lab) was adding the defer
                attribute to the script tag in the html file to ensure the DOM tree loaded before the script attempted to add the event listeners. Turns out I
                could have just put the script tag at the end of the body as well.
              </p>
            </div>
            <hr></hr>

            <div className="card-body">
              {TicTacToeDetails.techStack.sort().map((tech) => (
                <span key={`tech-stack-item-${tech}`} className="mx-2 badge bg-light text-dark border border-1 border-dark">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
