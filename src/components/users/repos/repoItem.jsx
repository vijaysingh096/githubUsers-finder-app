import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function RepoItems({ repo }) {
  const {
    allow_forking,
    archive_url,
    archived,
    assignees_url,
    blobs_url,
    branches_url,
    clone_url,
    collaborators_url,
    comments_url,
    commits_url,
    compare_url,
    contents_url,
    contributors_url,
    created_at,
    default_branch,
    deployments_url,
    description,
    disabled,
    downloads_url,
    events_url,
    fork,
    forks,
    forks_count,
    forks_url,
    full_name,
    git_commits_url,
    git_refs_url,
    git_tags_url,
    git_url,
    has_downloads,
    has_issues,
    has_pages,
    has_projects,
    has_wiki,
    homepage,
    hooks_url,
    html_url,
    id,
    is_template,
    issue_comment_url,
    issue_events_url,
    issues_url,
    keys_url,
    labels_url,
    language,
    languages_url,
    license,
    merges_url,
    milestones_url,
    mirror_url,
    name,
    node_id,
    notifications_url,
    open_issues,
    open_issues_count,
    owner,
    permissions,

    pulls_url,
    pushed_at,
    releases_url,
    size,
    ssh_url,
    stargazers_count,
    stargazers_url,
    statuses_url,
    subscribers_url,
    subscription_url,
    svn_url,
    tags_url,
    teams_url,
    topics,
    trees_url,
    updated_at,
    url,
    visibility,
    watchers,
    watchers_count,
  } = repo;

  return (
    <div className=" mb-2 rounded-md card bg-gray-400 hover:bg-gray-600 ">
      <div className="card-body">
        <h3 className="mb-2 text-2xl hover:text-info font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3  hover:text-success">{description}</p>
        <div><div className="mr-2 badge badge-info badge-lg">
          <FaEye className="mr-2" />
          {watchers_count}
        </div>
        <div className="mr-2 badge badge-success badge-lg">
          <FaStar className="mr-2" />
          {stargazers_count}
        </div>
        <div className="mr-2 badge badge-error badge-lg">
          <FaInfo className="mr-2" />
          {open_issues}
        </div>
        <div className="mr-2 badge badge-warning badge-lg">
          <FaUtensils className="mr-2" />
          {fork}
        </div></div>
      </div>
    </div>
  );
}

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItems;
