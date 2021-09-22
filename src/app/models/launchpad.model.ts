export interface Launchpad {
    id: string,
    details: string,
    wikipedia: string,
    name: string,
    full_name: string,
    status: "active" | "inactive",
    locality: string,
    region: string,
    timeline: string,
    latitude: number,
    longitude: number,
    landing_attempts: number,
    landing_success: number,
    launches: string[],
    rockets: string[],
    image: Images
}

interface Images {
    large: string[]
}