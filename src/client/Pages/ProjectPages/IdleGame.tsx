import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";
import { IdleGameDetails } from "../../../ProjectInfo";

const IdleGame = (props: Types.IdleGameProps) => {
  const nav = useNavigate();
  // for the details pages, would i need anything beyond  Overview, Features, Challenges, and Tech Stack?
  return (
    <div className="my-4">
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

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Overview</h3>
              <p>
                Idle Scape is an idle / incremental game based on the MMORPG Runescape. The player tells the game what they want to do, and the game executes
                those actions on an interval. The player can choose to train skills, go on quests, or engage in combat with various enemies. Options vary for
                each location the player may travel to.
              </p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3 className="text-center">Features</h3>
              <p>Auth process ensures no duplicate emails or player usernames.</p>
              <p>Game actions send a chat message to the chat window component.</p>
              <p>The game state is managed with Redux, and evey update to state writes to localStorage.</p>
              <p>Every 5 minutes, the player's data is updated on the Mongo database.</p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3 className="text-center">Challenges</h3>
              <p>
                Staying organized was a big task with this project as there are a lot of interconnected parts. I made sure to keep data structures and
                nomenclature as consistent and patterned as possible, and I documented functions and left notes to simplify the workflow. When implementing new
                skills, I broke down the big ideas into smaller ones, then translated those small ideas into pseudocode, which lent itself nicely to actual
                code.
              </p>
              <p>
                Redux and MongoDB were not part of the coursework, so implementing these were initially a challenge. To familiarize myself with Redux, I built a
                small app to update multiple slices of state in different ways to mimic the functionality of the final project with a much simpler
                implementation. Once the small app was complete, I expanded upon it as a framework and added in new features and functionality.
              </p>
            </div>
            <hr></hr>

            <div className="card-body">
              {IdleGameDetails.techStack.sort().map((tech) => (
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

export default IdleGame;
