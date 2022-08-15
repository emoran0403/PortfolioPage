import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";

const IdleGame = (props: Types.IdleGameProps) => {
  const nav = useNavigate();
  // for the details pages, would i need anything beyond  Overview, Features, Challenges, and Tech Stack?
  return (
    <div>
      <h1 className="text-center">Idle Scape</h1>
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
          <p>
            Idle Scape is an idle / incremental game based on the MMORPG Runescape. The player tells the game what they want to do, and the game executes those
            actions on an interval. The player can choose to train skills, go on quests, or engage in combat with various enemies. Options vary for each
            location the player may travel to.
          </p>
        </div>
        <div>
          <h3>Features</h3>
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
      </div>
    </div>
  );
};

export default IdleGame;
