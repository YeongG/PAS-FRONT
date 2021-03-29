import { all } from "redux-saga/effects";
import analysisSaga from "./analysis";

function* rootSaga() {
  yield all([analysisSaga()]);
}

export default rootSaga;
