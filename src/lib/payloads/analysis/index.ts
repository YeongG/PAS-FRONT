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
  boundingPoly: Vertice[];
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
  boundingPoly: Vertice[];
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
  adult: "VERY_UNLIKELY";
  medical: "VERY_UNLIKELY";
  racy: "VERY_UNLIKELY";
  spoof: "UNLIKELY";
  violence: "VERY_UNLIKELY";
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

export type AnalysisType =
  | "cropHint"
  | "fullText"
  | "imagePropertie"
  | "label"
  | "localizedObject"
  | "logo"
  | "safeSearch"
  | "text";
