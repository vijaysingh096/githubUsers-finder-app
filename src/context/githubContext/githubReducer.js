const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    // case "GET_USER":
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false,
    //   };
    // case "GET_REPOS":
    //   return {
    //     ...state,
    //     repos: action.payload,
    //     loading: false,
    //   };

    case "GET_USER_AND_REPOS":
      // console.log(
      //   "User payload ",
      //   action.payload.user,
      //   "payload.repos ",
      //   action.payload.repos
      // );
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
