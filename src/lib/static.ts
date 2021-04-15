import { AnalysisNavItem } from "../components/AnalysisNav/AnalysisNav";

export const allowedExtensions: string[] = ["jpg", "png", "jpeg"];
export const analysisItems: AnalysisNavItem[] = [
  {
    name: "Objects",
    value: "localizedObject",
  },
  {
    name: "Labels",
    value: "label",
  },
  {
    name: "Logos",
    value: "logo",
  },
  {
    name: "Text",
    value: "text",
  },
  {
    name: "Properties",
    value: "imagePropertie",
  },
  {
    name: "Safe Search",
    value: "safeSearch",
  },
];

export const propertyNameToKr = {
  id: "아이디",
  password: "비밀번호",
};
