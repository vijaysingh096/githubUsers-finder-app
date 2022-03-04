import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import React, { useEffect, useContext } from "react";
import GithubContext from "../context/githubContext/GitHubContext";
import { Link } from "react-router-dom";
import ReposList from "../components/users/repos/ReposList";

// import { getUser, gethUserRepos } from "../context/githubContext/githubAction";
import { getUserAndRepos } from "../context/githubContext/githubAction";

import { useParams } from "react-router-dom";

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();
  console.log(params.login, user);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getData = async () => {
      // const getUserData = await getUser(params.login);
      // dispatch({ type: "GET_USER", payload: getUserData });

      // const gethUserReposData = await gethUserRepos(params.login);
      // dispatch({ type: "GET_REPOS", payload: gethUserReposData });

      const getUserData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: getUserData });
    };

    getData();
  }, [dispatch, params.login]);

  let {
    login,
    name,
    id,
    node_id,
    avatar_url,
    gravatar_id,
    url,
    html_url,
    followers_url,
    following_url,
    gists_url,
    starred_url,
    subscriptions_url,
    organizations_url,
    repos_url,
    events_url,
    received_events_url,
    type,
    site_admin,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
    updated_at,
  } = user;

  if (loading) {
    return <h2>Loading....</h2>;
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              {" "}
              Back to Search
            </Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-lg shadow-xl card image-full">
                <figure>
                  <img src={avatar_url} alt="" />
                </figure>
                <div className="card-body shadow-xl  justify-end">
                  <div className=" text-center mb-0">
                    {/* <h2 className="card-title text-info text-1xl">{name}</h2> */}
                    <p className=" mx-1 text-2xl badge badge-warning">
                      {login}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl shadow-xl card-title ">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className=" mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location</div>
                    <div className="text-lg stat-value">{location}</div>
                  </div>
                )}

                {email && (
                  <div className="stat">
                    <div className="stat-title text-md">Email</div>
                    <div className="text-lg stat-value">{email}</div>
                  </div>
                )}
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`https://${blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full py-5 mb-6 rounded-lg shadow bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repo</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
          <ReposList repos={repos} />
        </div>
      </>
    );
  }
}

export default User;
