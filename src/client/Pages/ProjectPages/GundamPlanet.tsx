import * as React from "react";
import * as Types from "../../../../Types";
import { useNavigate } from "react-router-dom";
import { GundamPlanetDetails } from "../../../ProjectInfo";

const GundamPlanet = (props: Types.GundamPlanetProps) => {
  const nav = useNavigate();
  const buttonJSX = () => {
    return (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => {
            nav(`/`);
          }}
        >
          Main page
        </button>
        <a className="btn btn-primary btn-sm m-2" href={GundamPlanetDetails.gitHubURL} target="_blank">
          Git Hub Repo
        </a>
        <a className="btn btn-primary btn-sm m-2" href={GundamPlanetDetails.appURL} target="_blank">
          Project Site
        </a>
      </div>
    );
  };
  return (
    <div className="my-4">
      <h1 className="text-center">Gundam Planet Scraper</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>
      {buttonJSX()}

      <div className="d-flex justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3>Overview</h3>
              <p>text here</p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Features</h3>
              <p>text here</p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3>Challenges</h3>
              <p>text here</p>
            </div>
            <hr></hr>

            <div className="card-body">
              {GundamPlanetDetails.techStack.sort().map((tech) => (
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

export default GundamPlanet;
