import { GoogleVisionRes } from "../../../lib/payloads/analysis";
import AnalysisAction, {
  GET_ANALYSIS_SUCCESS,
  SET_ORIGINAL_IMG_SRC,
} from "../../action/analysis";

interface AnalysisReducerState {
  originalImgSrc: string;
  analysis: GoogleVisionRes;
}

const initialState: AnalysisReducerState = {
  originalImgSrc: "",
  analysis: {
    cropHintsAnnotation: { cropHints: [] },
    fullTextAnnotation: { pages: [], text: "" },
    imagePropertiesAnnotation: {
      cropHints: [],
      dominantColors: { colors: [] },
    },
    labelAnnotations: [],
    localizedObjectAnnotations: [],
    logoAnnotations: [],
    safeSearchAnnotation: {
      adult: "VERY_UNLIKELY",
      medical: "VERY_UNLIKELY",
      racy: "VERY_UNLIKELY",
      spoof: "VERY_UNLIKELY",
      violence: "VERY_UNLIKELY",
    },
    textAnnotations: [],
  },
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
