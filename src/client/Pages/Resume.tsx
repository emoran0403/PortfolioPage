import * as React from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../../Types";

const Resume = (props: Types.ResumeProps) => {
  const nav = useNavigate();

  return (
    <div>
      <iframe
        width="100%"
        height="93%"
        src="https://docs.google.com/document/d/1CmYj4HI47qDIDJIAohi7Myr4HCO8QVp7uzxP_QeMLek/edit?usp=sharing"
      ></iframe>
    </div>
  );
};

export default Resume;
