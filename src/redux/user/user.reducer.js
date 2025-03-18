import userInitialState from "./user.initialstate";
import { LOGIN, LOGOUT, SET_LOADING, SET_USERDETAILS } from "./user.types";

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userDetails: action.payload,
        // token: action.payload.token,
        // isSuperAdmin: action.payload.isSuperAdmin,
        // permissions: action.payload.permissions,
      };

    case LOGOUT:
      return { ...userInitialState };

    // case LOGOUT:
    //   localStorage.clear();
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //     userDetails: null,
    //     token: "",
    //     isLoading: false,
    //     isSuperAdmin: false,
    //     permissions: {},
    //   };

    case SET_USERDETAILS:
      return {
        ...state,
        useDetails: action.payload.useDetails,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
