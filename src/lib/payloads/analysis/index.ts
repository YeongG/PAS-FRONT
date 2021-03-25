interface Location {
  x?: number;
  y?: number;
}

interface Vertice {
  vertices: Location[];
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

interface GoogleAiVisionRes {
  cropHintsAnnotation: CropHintAnnotation;
  faceAnnotations;
  imagePropertiesAnnotation;
  labelAnnotations;
  localizedObjectAnnotations;
  safeSearchAnnotation;
}
