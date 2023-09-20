import * as actionTypes from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
  // reducerin yaptığı mevzu state e göre action belirlemek
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};

export default countReducer;
