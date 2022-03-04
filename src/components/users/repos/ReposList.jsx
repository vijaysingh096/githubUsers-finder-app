import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./repoItem";
function ReposList({ repos }) {
  console.log("Repos list", repos);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Letest Respositories
        </h2>
        {repos.map((repo) => (
          <RepoItems key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

ReposList.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default ReposList;
