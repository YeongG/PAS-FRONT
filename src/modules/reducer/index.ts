import { combineReducers } from "redux";
import analysisReducer from "./analysis";
import sliderReducer from "./slider";
import loginModalReducer from "./loginModal";

const rootReducer = combineReducers({
  slider: sliderReducer,
  analysis: analysisReducer,
  loginModal: loginModalReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
