export interface Apod {
    date: Date,
    explanation: string,
    hdurl: string,
    media_type: MediaType,
    service_version: string,
    title: string,
    url: string,
    copyright: string | null
}

enum MediaType {
    image,
    video
}