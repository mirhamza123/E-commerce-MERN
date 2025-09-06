import React from "react";
import { NavLink } from "react-router-dom";
import Story from "../about/Story";
import State from "../about/State";
import Team from "../about/Team";
import Service from "../about/Service";

function About() {
  return (
    <div>
      <Story />
      <State />
      <Team />
      <Service />
    </div>
  );
}

export default About;
