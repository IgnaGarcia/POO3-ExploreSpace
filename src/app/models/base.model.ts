export interface Base {
    id: string,
    name: string,
    images: Images
    status: string,
    wikipedia: string,
    region: string,
    landing_attempts: number,
    landing_successes: number,
    launch_attempts: number,
    launch_successes: number,

    locality: string,
    details: string,
    full_name: string,
    latitude: number,
    longitude: number,
    launches: string[],
}

interface Images {
    large: string[]
}