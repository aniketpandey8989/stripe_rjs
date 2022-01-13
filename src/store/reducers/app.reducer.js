import { App } from "../constants";

const initialState = {
  isLoading: 0,
  credential: {},
  bankDetail: {},
  loading: false,
  serverConfig: [],
  userDetails: {},
};

function AppReducer(state = initialState, action) {
  switch (action.type) {

    case App.CREDENTIAL:
      return {
        ...state,
        credential: action.payload,
      };

    default:
      return state;
  }
}

export default AppReducer;
