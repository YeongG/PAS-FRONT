import { combineReducers } from "redux";
import analysisReducer from "./analysis";
import sliderReducer from "./slider";

const rootReducer = combineReducers({
  slider: sliderReducer,
  analysis: analysisReducer,
});

export default rootReducer;
export type Store = ReturnType<typeof rootReducer>;
