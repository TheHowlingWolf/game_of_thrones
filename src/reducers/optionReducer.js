import { optionMenuConstants } from "@constants/Constant";

const initState = {
  loading: false,
  data: {},
};

const optionReducer = (state = initState, action) => {
  switch (action.type) {
    case optionMenuConstants.OPTIONS_API_START:
      return { ...state, loading: true };
    case optionMenuConstants.OPTIONS_API_FAILED:
      return { ...state, loading: false };
    case optionMenuConstants.OPTIONS_API_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default optionReducer;
