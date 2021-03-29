export const GET_ANALYSIS = "analysis/GET_ANALYSIS" as const;
export const GET_ANALYSIS_SUCCESS = "analysis/GET_ANALYSIS_SUCCESS" as const;
export const SET_ORIGINAL_IMG_SRC = "analyis/SET_ORIGINAL_IMG_SRC" as const;

export const getAnalysis = (file: File) => ({
  type: GET_ANALYSIS,
  payload: { file },
});
export const getAnalysisSuccess = (anaysis: any) => ({
  type: GET_ANALYSIS_SUCCESS,
  payload: { anaysis },
});
export const setOriginalImgSrc = (imgSrc: string) => ({
  type: SET_ORIGINAL_IMG_SRC,
  payload: { imgSrc },
});

type AnalysisAction = ReturnType<
  typeof getAnalysisSuccess | typeof setOriginalImgSrc
>;

export default AnalysisAction;
