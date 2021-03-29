import { AxiosResponse } from "axios";
import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { imageAnalysis } from "../../../lib/api/analysis";
import {
  getAnalysis,
  getAnalysisSuccess,
  GET_ANALYSIS,
  setOriginalImgSrc,
} from "../../action/analysis";

function* getAnalysisSaga(action: ReturnType<typeof getAnalysis>) {
  const formData: FormData = new FormData();
  formData.append("image", action.payload.file);

  const url: string = URL.createObjectURL(action.payload.file);
  yield put(setOriginalImgSrc(url));
  try {
    const res: AxiosResponse<any> = yield call(imageAnalysis, formData);
    yield put(getAnalysisSuccess(res.data));
    const history = yield getContext("history");
    history.push("/analysis");
  } catch (err) {}
}

function* analysisSaga() {
  yield takeEvery(GET_ANALYSIS, getAnalysisSaga);
}

export default analysisSaga;
