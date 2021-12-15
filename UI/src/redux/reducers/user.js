import * as type from "../types";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: false
  },
  loading: false,
  error: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: true
      }
    case type.REGISTER_USER_SUCCESS: 
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case type.REGISTER_USER_FAILED: 
      return {
        ...state, 
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
}
