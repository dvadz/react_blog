import jsonPlaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// KEPT FOR REFERENCE
// Original fetchUser, executes axios for the same userId repeatedly
// export const fetchUser = (id) => {
//   return async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

// Used lodash memoize to prevent running duplicate queries for the same userId
export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
