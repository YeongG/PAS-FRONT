import AnalysisAction, {
  GET_ANALYSIS_SUCCESS,
  SET_ORIGINAL_IMG_SRC,
} from "../../action/analysis";

interface AnalysisReducerState {
  originalImgSrc: string;
  analysis: any;
}

const initialState: AnalysisReducerState = {
  originalImgSrc: "",
  analysis: {},
};

const analysisReducer = (
  state: AnalysisReducerState = initialState,
  action: AnalysisAction
): AnalysisReducerState => {
  switch (action.type) {
    case SET_ORIGINAL_IMG_SRC: {
      return {
        ...state,
        originalImgSrc: action.payload.imgSrc,
      };
    }
    case GET_ANALYSIS_SUCCESS: {
      return {
        ...state,
        analysis: action.payload.anaysis,
      };
    }
    default: {
      return state;
    }
  }
};

export default analysisReducer;
