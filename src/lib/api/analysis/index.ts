import { AxiosResponse } from "axios";
import apiDefault from "../../client";
import { GoogleVisionRes } from "../../payloads/analysis";

export const imageAnalysis = (
  formData: FormData
): Promise<AxiosResponse<any>> => {
  return apiDefault().post("/analysis", formData);
};
