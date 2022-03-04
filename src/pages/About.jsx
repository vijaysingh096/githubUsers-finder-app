import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4 ">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search{" "}
        <b>
          <i className="text-3xl">GitHub Profiles</i>
        </b>{" "}
        and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-dark">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:{" "}
        <a className="text-primary" href="https://twitter.com/vijaysingh096">
          Vijay Singh
        </a>
      </p>
    </>
  );
}

export default About;
