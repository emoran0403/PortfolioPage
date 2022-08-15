import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";
import { StudioGhibliDetails } from "../../../ProjectInfo";

const StudioGhibli = (props: Types.StudioGhibliProps) => {
  const nav = useNavigate();
  return (
    <div className="my-4">
      <h1 className="text-center">Studio Ghibli Lab</h1>
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
                This was one of the first labs assigned after being introduced to React, and focused on fetching data from an external API. Landing on the home
                page triggers a fetch to the people and films endpoints. These return a big list of people and filmsm which I hold in the App component, and
                pass down as props to the individual components to avoid extra fetches on those components.
              </p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Features</h3>
              <p>
                Fetches data from the{" "}
                <span>
                  <a target="_blank" href="https://ghibliapi.herokuapp.com/#">
                    Studio Ghibli API
                  </a>
                </span>{" "}
                and displays the information as bootstrap cards.
              </p>

              <p>This lab was before react-router-dom was taught, so I assigned each 'page' a view number, and conditionally displayed each view</p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3>Challenges</h3>
              <p>
                The most challenging part of this lab was implementing the characters section in the films page. The endpoint for a particular film serves up an
                endpoint for each character, and not the individual character's name. Instead of making an unknown number of fetches to those endpoints for just
                a name, I passed in the previously fetched full list of characters as props to the component, and made use of array manipulation to create a
                list of the character names for an individual movie.
              </p>
            </div>
            <hr></hr>

            <div className="card-body">
              {StudioGhibliDetails.techStack.sort().map((tech) => (
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

export default StudioGhibli;
