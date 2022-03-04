import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
function Home() {
  let url = process.env.REACT_APP_GITHUB_API_URL;
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
