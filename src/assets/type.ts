export interface locationType {
    lng: number,
    lat : number
}

export interface mapboxOutput {
attribution: string,
features:feature[],
query: [] 
}

export interface feature {
    place_name: string
}

