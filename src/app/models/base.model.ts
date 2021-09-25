export interface Base {
    id: string,
    details: string,
    wikipedia: string,
    name: string,
    full_name: string,
    status: "active" | "retired",
    locality: string,
    region: string,
    latitude: number,
    longitude: number,
    landing_attempts: number,
    landing_success: number,
    launches: string[],
    image: Images
}

interface Images {
    large: string[]
}