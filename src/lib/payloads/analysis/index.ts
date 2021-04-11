export interface Vertice {
  x?: number;
  y?: number;
}

export interface RGB {
  blue: number;
  green: number;
  red: number;
}

export interface ColorAnalysis {
  color: RGB;
  hex: string;
  percent: number;
  percentRounded: number;
  pixelFraction: number;
  rgb: string;
  score: number;
}

export interface CropHint {
  boundingPoly: {
    vertices: Vertice[];
  };
  confidence: number;
  importanceFraction: number;
}

export interface LabelAnalysis {
  description: string;
  mid: string;
  score: number;
  topicality: number;
}

export interface LocalizedObjectAnalysis {
  boundingPoly: {
    normalizedVertices: Vertice[];
  };
  mide: string;
  name: string;
  score: number;
}

export interface LogoAnalysis {
  boundingPoly: {
    vertices: Vertice[];
  };
  description: string;
  mid: string;
  score: number;
}

export interface TextAnalysis {
  description: string;
  locale: string;
  boundingPoly: {
    vertices: Vertice[];
  };
}

export interface SafeSearchAnnotation {
  adult: AnalysisSafeType;
  medical: AnalysisSafeType;
  racy: AnalysisSafeType;
  spoof: AnalysisSafeType;
  violence: AnalysisSafeType;
}

export interface FullTextAnnotation {
  pages: [];
  text: string;
}

export interface ImagePropertiesAnnotation {
  cropHints: CropHint[];
  dominantColors: {
    colors: ColorAnalysis[];
  };
}
export interface CropHintsAnnotation {
  cropHints: CropHint[];
}

export interface GoogleVisionRes {
  cropHintsAnnotation: CropHintsAnnotation;
  fullTextAnnotation: FullTextAnnotation;
  imagePropertiesAnnotation: ImagePropertiesAnnotation;
  labelAnnotations: LabelAnalysis[];
  localizedObjectAnnotations: LocalizedObjectAnalysis[];
  logoAnnotations: LogoAnalysis[];
  safeSearchAnnotation: SafeSearchAnnotation;
  textAnnotations: TextAnalysis[];
}

export type AnalysisSafeType =
  | "VERY_UNLIKELY"
  | "UNLIKELY"
  | "POSSIBLE"
  | "LIKELY"
  | "VERY_LIKELY";

export type AnalysisType =
  | "cropHint"
  | "fullText"
  | "imagePropertie"
  | "label"
  | "localizedObject"
  | "logo"
  | "safeSearch"
  | "text";

export enum AnalysisSafeValue {
  "VERY_UNLIKELY" = 1,
  "UNLIKELY" = 2,
  "POSSIBLE" = 3,
  "LIKELY" = 4,
  "VERY_LIKELY" = 5,
}
