import React, { useState, useContext } from "react";
import GithubContext from "../../context/githubContext/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/githubContext/githubAction";

function UserSearch() {
  const [searchVal, setSearchVal] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const handleChange = (e) => setSearchVal(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchVal) {
      setAlert("please enter somthing", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(searchVal);
      //  console.log(" Search users ",users)
      dispatch({ type: "GET_USERS", payload: users });
      setSearchVal("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={searchVal}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg "
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className=" btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
