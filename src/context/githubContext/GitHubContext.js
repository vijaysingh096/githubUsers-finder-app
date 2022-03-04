import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

const baseUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitToken = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const intialState = {
    users: [],
    user: {},
    repos: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, intialState);

  // const searchUsers = async (text) => {
  //   setLoading();
  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const responce = await fetch(`${baseUrl}/search/users?${params}`, {
  //     headers: { Authorization: `token ${gitToken}` },
  //   });
  //   const { items } = await responce.json();
  //   console.log(items);
  //   // setUsers(items);
  //   // setLoading(false);

  //   dispatch({ type: "GET_USERS", payload: items });
  // };

  // const getUser = async (login) => {
  //   setLoading();

  //   const responce = await fetch(`${baseUrl}/users/${login}`, {
  //     headers: { Authorization: `token ${gitToken}` },
  //   });
  //   if (responce.status === 404) {
  //     console.log(login, "user not found ");
  //     // window.location = "/notfound";
  //   } else {
  //     const data = await responce.json();
  //     console.log("user ", data);
  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  // const gethUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const responce = await fetch(`${baseUrl}/users/${login}/repos?${params}`, {
  //     headers: { Authorization: `token ${gitToken}` },
  //   });
  //   const data = await responce.json();

  //   dispatch({ type: "GET_REPOS", payload: data });
  // };

  // const setLoading = () => dispatch({ type: "SET_LOADING" });
  // const clearUsers = () =>
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });

  console.log("State", state);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        //  searchUsers
        // clearUsers,
        // getUser,
        // gethUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
