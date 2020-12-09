export interface locationType {
    lng: number,
    lat: number
}

export interface mapboxOutput {
    attribution: string,
    features: features[],
    query: []
}

// export interface feature {
//     place_name: string
// }

export type features = {
    bbox: number[],
    center: number[],
    context: contextInfo[],
    geometry: geometryData,
    id: string,
    place_name: string,
    place_type: string[],
    properties: propertiesData,
    relevance: number,
    text: string,
    type: string
}

interface propertiesData {
    wikidata: string
}

interface geometryData {
    type: string,
    coordinates: number[]
}

interface contextInfo {
    id: string,
    short_code: string,
    text: string,
    wikidata: string
}