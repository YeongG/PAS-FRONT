import { AxiosResponse } from "axios";
import apiDefault from "../../client";
import { GoogleAiVisionRes } from "../../payloads/analysis";

export const imageAnalysis = (
  formData: FormData
): Promise<AxiosResponse<any>> => {
  return apiDefault().post("/analysis", formData);
};
