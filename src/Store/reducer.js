//Initial State
const initialState = {
  username: "",
};
//ActionType
const UPDATE_USERNAME = "UPDATE_USERNAME";

//ActionCreator

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  payload: username,
});

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
