import axios from "axios";

const baseUrl = process.env.REACT_APP_GITHUB_API_URL;
const gitToken = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: baseUrl,
  headers: { Authorization: `token ${gitToken}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // const responce = await fetch(`${baseUrl}/search/users?${params}`, {
  //   headers: { Authorization: `token ${gitToken}` },
  // });
  // const { items } = await responce.json();
  // console.log("Items => ",items);
  // return items;

  const responce = await github.get(`/search/users?${params}`);
  const { items } = responce.data;
  return items;
};

// export const getUser = async (login) => {
//   const responce = await fetch(`${baseUrl}/users/${login}`, {
//     headers: { Authorization: `token ${gitToken}` },
//   });
//   if (responce.status === 404) {
//     console.log(login, "user not found ");
//     // window.location = "/notfound";
//   } else {
//     const data = await responce.json();
//     console.log("user ", data);
//     return data;
//   }
// };

// export const gethUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });

//   const responce = await fetch(`${baseUrl}/users/${login}/repos?${params}`, {
//     headers: { Authorization: `token ${gitToken}` },
//   });
//   const data = await responce.json();

//   return data;
// };

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  // console.log("User AND REPO ", user.data, "REPO ", repos.data);
  return { user: user.data, repos: repos.data };
};
