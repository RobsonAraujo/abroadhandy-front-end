export interface StrategistRequest {
  prompt: string;
}

export interface EssayAngle {
  title: string;
  description: string;
}

export interface StrategistResponse {
  angles: EssayAngle[];
  raw_response: string;
}
