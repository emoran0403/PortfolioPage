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
              <p>
                My friend at Gundam Planet maintains a Google Sheet with 3000+ entries for upcoming model kit release
                dates for their customers. Updating this list requires checking one of their many distributors' websites
                for the information. This was done manually, and updating the entire list required around 8 hours of
                manual data entry.
              </p>
              <p>
                Gundam Getter reads the SKU data from Google Sheets, then the server launches a headless Firefox browser
                via Selenium to scrape model kit release dates from select websites, then writes that data back to a
                Google Sheet.
              </p>
            </div>
            <hr></hr>
            <div className="card-body">
              <h3>Features</h3>
              <p>
                Utilizes Google Sheets API to authorize and authenticate read and write requests to the Google Sheet.
              </p>
              <p>A headless Selenium Firefox browser to scrape web data.</p>
              <p>
                If the release date cannot be found on the page, a link to the page is written to the Google Sheet for
                manual verification.
              </p>
            </div>
            <hr></hr>

            <div className="card-body">
              <h3>Challenges</h3>
              <p>
                Selenium is a very interesting and exciting tool to work with. My main complaint is that their DOM
                element selectors aren't exactly 1-to-1 with traditional DOM traversal methods. This required more time
                for trial and error than if they had simply been able to implement
                Document.get("ExactlyWhatIAmLookingFor").
              </p>
              <p>
                Google APIs and their documentation was the most challenging part of this project. I felt like I was
                playing whack-a-mole with the debugging process: something would come up, I would check the docs to fix
                it, something new would come up that the first docs didn't warn about, and I would have to check the
                docs again.
              </p>
              <p>
                Trying to deploy Gundam Getter was definitely the most frustrating part of the project. Every issue I
                had to address to get the project working locally came up again in a slightly different way in
                deployment. The build process on Heroku ran out of available memory and would not build - I had to
                convert it to a NextJS app to address this. Selenium required an older Heroku stack to run on. Firefox's
                binaries for Selenium had to be added to the project files itself since it wouldn't be running from my
                machine. Google APIs required a few additional steps the docs didn't really warn about.
              </p>
              <p>
                In the end I decided to not deploy Gundam Getter, and instead teach my friend how to download the code
                from github and run the project locally.
              </p>
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
