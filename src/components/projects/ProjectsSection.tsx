import React from "react";
import "../_general.scss";
import "./_projects.scss";

export default function AboutSection(): JSX.Element {
  return (
    <section id="projects" className="content-section projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-list">
          {/* JavaScript fills this div with projects */}
        </div>
      </div>
    </section>
  );
}