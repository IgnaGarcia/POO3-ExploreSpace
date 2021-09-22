export interface StarLink {
    docs: Doc,
    totalDocs: number,
}

interface Doc {
    id: string,
    launch: string,
    height_km: number | null,
    latitude: number | null,
    longitude: number | null,
    velocity_kms: number | null
}