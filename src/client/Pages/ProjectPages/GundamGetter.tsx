import * as React from "react";
import * as Types from "../../../../Types";
import { GundamGetterDetails } from "../../../ProjectInfo";
import ProjectLinks from "../../Components/ProjLinks";

const GundamGetter = (props: Types.GundamGetterProps) => {
  return (
    <div className="my-4">
      <h1 className="text-center">Gundam Getter</h1>
      <hr style={{ width: "50%", height: "5px", margin: "auto" }}></hr>

      <ProjectLinks appURL={GundamGetterDetails.appURL} gitHubURL={GundamGetterDetails.gitHubURL} />

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
              {GundamGetterDetails.techStack.sort().map((tech) => (
                <span
                  key={`tech-stack-item-${tech}`}
                  className="mx-2 badge bg-light text-dark border border-1 border-dark"
                >
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

export default GundamGetter;
