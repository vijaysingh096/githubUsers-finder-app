import React, { useEffect, useState, useContext } from "react";

import UserItems from "./UserItems";
import GithubContext from "../../context/githubContext/GitHubContext";

function UserResults() {
  const { users = [], loading, searchUsers } = useContext(GithubContext);
  console.log(users, loading);

  // useEffect(() => {
  //   searchUsers();
  // }, []);

  //   const baseUrl = process.env.REACT_APP_GITHUB_API_URL;
  //   const gitToken = process.env.REACT_APP_GITHUB_TOKEN;
  //   console.log(baseUrl, gitToken);

  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   const searchUsers = async () => {
  //     const responce = await fetch(`${baseUrl}/users`, {
  //       headers: { Authorization: `token ${gitToken}` },
  //     });
  //     const data = await responce.json();
  //     console.log(data);
  //     setUsers(data);
  //     setLoading(false);
  //   };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-col-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h3>Loading......</h3>;
  }
}

export default UserResults;
