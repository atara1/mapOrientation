export interface LocationData {
  center: [number, number];
  text: string;
}

export interface MapboxOutput {
  attribution: string;
  features: Features[];
  query: [];
}

export type Features = {
  bbox: number[],
  center: [number, number],
  context: ContextInfo[],
  geometry: GeometryData,
  id: string,
  place_name: string,
  place_type: string[],
  properties: PropertiesData,
  relevance: number,
  text: string,
  type: string
};

interface PropertiesData {
  wikidata: string;
}

interface GeometryData {
  type: string;
  coordinates: [number, number];
}

interface ContextInfo {
  id: string;
  short_code: string;
  text: string;
  wikidata: string;
}
