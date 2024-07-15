import {
  LIST_USERS,
  LIST_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR
} from '../actions/userActions';

const initialState = {
  users: [],
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USERS:
      return { ...state, users: action.payload, error: null };
    case LIST_USERS_ERROR:
      return { ...state, error: action.payload };
    case ADD_USER_SUCCESS:
      return { ...state, error: null };
    case ADD_USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
