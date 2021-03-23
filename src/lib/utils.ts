import { allowedExtensions } from "./static";

export const isAllowedFile = (extension: string): boolean => {
  return allowedExtensions.includes(extension.toLowerCase());
};
