interface Location {
  x?: number;
  y?: number;
}

interface Vertice {
  vertices: Location[];
}

interface Color {
  hex: string;
  percent: number;
  pixelFraction: number;
  rgb: string;
  score: number;
  percentRounded: number;
}

interface CropHintAnnotation {
  boundingPoly: Vertice;
  confidence: number;
  importanceFraction: number;
}

interface FaceAnnotation {
  angerLikelihood: string;
  blurredLikelihood: string;
  boundingPoly: Vertice;
  detectionConfidence: number;
  fdBoundingPoly: Vertice;
  headwearLikelihood: string;
  joyLikelihood: string;
  landmarkingConfidence: number;
  panAngle: number;
  rollAngle: number;
  surpriseLikelihood: string;
  tiltAngle: number;
  underExposedLikelihood: string;
  sorrowLikelihood: string;
}

interface LabelAnnotation {
  description: string;
  mid: string;
  score: number;
  topicality: number;
}

export interface GoogleAiVisionRes {
  cropHintsAnnotation: {
    cropHints: CropHintAnnotation[];
  };
  faceAnnotations?: FaceAnnotation;
  imagePropertiesAnnotation: {
    cropHints: CropHintAnnotation[];
    dominantColors: {
      colors: Color[];
    };
  };
  labelAnnotations: LabelAnnotation[];
  localizedObjectAnnotations: object;
  safeSearchAnnotation: object;
}
