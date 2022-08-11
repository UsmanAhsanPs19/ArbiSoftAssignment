import colors from "../../utils/colors";
import { CHANGE_THEME } from "./actions";

const initialState = {
    primaryColor: colors.primaryBlue,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_THEME:
        return {...state, primaryColor: action?.payload?.color || colors.primaryBlue };
      default:
        return state;
    }
  };

  export {reducer};