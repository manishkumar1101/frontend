import {
  LIST_USERS,
  LIST_USERS_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  EDIT_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} from '../actions/userActions';

const initialState = {
  users: [],
  error: null,
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
    case EDIT_USER_SUCCESS:
      return { ...state, error: null };
    case DELETE_USER_SUCCESS:
      return { ...state, users: state.users.filter(user => user.id !== action.payload), error: null };
    default:
      return state;
  }
};

export default userReducer;
