export interface Launch {
    id: string,
    name: string,
    details: string,
    flight_number: number,

    success: boolean,
    upcoming: boolean,
    date_utc: Date,

    crew: string[],
    links: LaunchLink,

    rocket: string,
    static_fire_date_utc: Date,
    static_fire_date_unix: number,
    date_unix: number,
    date_local: Date,
    date_precision: string,
    tbd: boolean,
    net: boolean,
    failures: LaunchFailure[],
    ships: string[],
    capsules: string[],
    payloads: string[],
    launchpad: string,
    cores: LaunchCore[]
}

interface LaunchLink {
    flickr: LaunchImages,
    patch: LaunchLogo,
    reddit: LaunchReddit,
    youtube_id: string | null,
    wikipedia: string | null,
    article: string | null,
    webcast: string | null,
    presskit: string | null
}

interface LaunchImages {
    small: string[],
    original: string[]
}

interface LaunchLogo {
    small: string | null,
    large: string | null
}

interface LaunchReddit {
    campaign: string | null,
    launch: string | null,
    media: string | null,
    recovery: string | null
}

interface LaunchFailure {
    time: number,
    altitude: null,
    reason: string
}

interface LaunchCore {
    core: string,
    flight: number,
    gridfins: boolean,
    legs: boolean,
    reused: boolean,
    landing_attempt: boolean,
    landing_success: boolean,
    landing_type: string,
    landpad: string,
}