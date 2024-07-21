export const LIST_USERS = 'LIST_USERS';
export const LIST_USERS_ERROR = 'LIST_USERS_ERROR';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_ERROR = 'ADD_USER_ERROR';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const getUsers = () => async dispatch => {
  try {
    const response = await fetch('http://example.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const parsedResponse = await response.json();
    dispatch({
      type: LIST_USERS,
      payload: parsedResponse,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: LIST_USERS_ERROR,
      payload: e.message,
    });
  }
};

export const addUser = (payload) => async dispatch => {
  try {
    const response = await fetch("http://example.com/user", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: parsedResponse.user,
      });
      dispatch(getUsers());
    } else {
      throw new Error(parsedResponse.message);
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_USER_ERROR,
      payload: e.message,
    });
  }
};

export const editUser = (payload) => async dispatch => {
  try {
    const response = await fetch(`http://example.com/user/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: parsedResponse.user,
      });
      dispatch(getUsers());
    } else {
      throw new Error(parsedResponse.message);
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_USER_ERROR,
      payload: e.message,
    });
  }
};

export const deleteUser = (id) => async dispatch => {
  try {
    const response = await fetch(`http://example.com/user/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: id,
      });
      dispatch(getUsers());
    } else {
      throw new Error(parsedResponse.message);
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_USER_ERROR,
      payload: e.message,
    });
  }
};
